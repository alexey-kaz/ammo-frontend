import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, AbstractControl} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {

  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  auth: string;
  zabbix_url: string;
  zabbix_user: string;
  zabbix_pass: string;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.http.get("http://localhost:3000/get_zabbix_credentials", { responseType: 'text'}).subscribe((data: any) => {
        console.log('get_zabbix_credentials');
        console.log(data);
        this.zabbix_url = 'http://' + data['zabbix_address'] + ':' + data['zabbix_port'] + '/api_jsonrpc.php';
        this.zabbix_user = data['zabbix_user'];
        this.zabbix_pass = data['zabbix_pass'];
      },
      error => console.log(error),
    );
    this.http.get("http://localhost:3000/get_auth_token", { responseType: 'text'}).subscribe((data: any) => {
        console.log('get_zabbix_auth');
        console.log(data);
        this.auth = data;
      },
      error => console.log(error),
    );
  }

  ngOnInit(): void {
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([]),
    });
    this.addRow();
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      vm: ['', Validators.required],
      ip: ['', [Validators.email, Validators.required]],
      isEditable: [true],
    });
  }

  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.push(this.initiateForm());
  }

  deleteRow(index: number) {
    const control =  this.userTable.get('tableRows') as FormArray;
    const vm = control.at(index).value['vm'];
    console.log(vm);
    const ip = control.at(index).value['ip'];
    console.log(ip);
    control.removeAt(index);
    this.postInfTable('delete', vm, ip);
  }

  editRow(group: AbstractControl) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: AbstractControl) {
    group.get('isEditable').setValue(false);
    console.log(this.userTable.value['tableRows']);
    console.log('test zabbix host create');
    this.postInfTable('create', group.value['vm'], group.value['ip']);
  }

  postInfTable(method: string, vm: any, ip: any) {
    const url = `http://localhost:3000/post_infrastructure_table${method}`;
    this.http.post(url, {'vm': vm, 'ip': ip}).subscribe(data => {
      console.log(data);
    });
    console.log('postInfTable');
  }


  get getFormControls() {
    return this.userTable.get('tableRows') as FormArray;
  }

  getInfTable() {
    const control =  this.userTable.get('tableRows') as FormArray;
    let value;
    this.http.get('http://localhost:3000/get_infrastructure_table',
      { responseType: 'text'}).subscribe((data: any) => {
      // this.userTable.setValue(JSON.parse(data));
      console.log(data);
      value = {'vm': data['vm'], 'ip': data['ip'], "isEditable": false };
      control.insert(control.length, value);
    });
    console.log(control);
  }

  clearInfTable() {
    console.log(this.userTable.value);
    const control =  this.userTable.get('tableRows') as FormArray;
    control.clear();
    control.push(this.initiateForm());
    this.userTable.setValue(
      { "tableRows": [ { "vm": "", "ip": "", "isEditable": true } ] },
      );
  }
}
