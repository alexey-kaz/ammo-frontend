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
    this.http.get("http://localhost:3000/get_zabbix_credentials").subscribe((data: any) => {
        console.log('get_zabbix_credentials');
        console.log(data);
        this.zabbix_url = 'http://' + data['zabbix_address'] + ':' + data['zabbix_port'] + '/api_jsonrpc.php';
        this.zabbix_user = data['zabbix_user'];
        this.zabbix_pass = data['zabbix_pass'];
      },
      error => console.log(error),
    );
    this.http.get("http://localhost:3000/get_auth_token").subscribe((data: any) => {
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

  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
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
    control.removeAt(index);
    // this.http.post(this.zabbix_url, {
    //   "jsonrpc": "2.0",
    //   "method": "host.create",
    //   "params": {
    //     "hostid": control.value['hostid'],
    //   },
    //   "auth": this.auth,
    //   "id": 1,
    // }).subscribe((data: any) => {
    //     console.log(data);
    //   },
    //   error => console.log(error),
    // );
    this.postInfTable();
  }

  editRow(group: AbstractControl) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: AbstractControl) {
    group.get('isEditable').setValue(false);

    console.log(group.value['vm']);
    console.log(group.value['ip']);
    console.log('test zabbix host create');
    // this.http.post(this.url, {
    //   "jsonrpc": "2.0",
    //   "method": "host.create",
    //   "params": {
    //     "host": "Linux server",
    //     "interfaces": [
    //       {
    //         "type": 1,
    //         "main": 1,
    //         "useip": 1,
    //         "ip": this.values[0],
    //         "dns": "",
    //         "port": "10050",
    //       },
    //     ],
    //     "groups": [
    //       {
    //         "groupid": "6",
    //       },
    //     ],
    //     "templates": [
    //       {
    //         "templateid": "10186",
    //       },
    //     ],
    //   },
    //   "auth": this.auth,
    //   "id": 1,
    // }).subscribe((data: any) => {
    //     this.host_id = data['result']['hostids'];
    //     console.log(data);
    //   },
    //   error => console.log(error),
    // );
    // group.value['hostid'] = this.host_id;
    this.postInfTable();
  }

  postInfTable() {
    const url = `http://localhost:3000/post_infrastructure_table`;
    this.http.post(url, this.userTable.value).subscribe(data => {
      console.log(data);
    });
    console.log('postInfTable');
  }

  saveUserDetails() {
    console.log(this.userTable.value);
  }

  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }

  submitForm() {
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    console.log(this.touchedRows);
  }

  getInfTable() {
    const control =  this.userTable.get('tableRows') as FormArray;
    this.clearInfTable();
    this.http.get('http://localhost:3000/get_infrastructure_table',
      { responseType: 'text'}).subscribe((data: any) => {
        for (let i = 0; i < JSON.parse(data).tableRows.length - 1; i++) {
          control.push(this.initiateForm());
        }
      this.userTable.setValue(JSON.parse(data));
      console.log(data);
    });
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
