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
  constructor(private fb: FormBuilder, private http: HttpClient) { }

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
    this.postInfTable();
  }

  editRow(group: AbstractControl) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: AbstractControl) {
    group.get('isEditable').setValue(false);
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
