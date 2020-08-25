import {Component, OnInit} from '@angular/core';
import {Tab} from "./tab.model";
import {DynamicWidgetsComponent} from "./components/dynamicWidgets/dynamicWidgets.component";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ngx-main',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  tabs = new Array<Tab>();
  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTabs();
  }

  getNewTab() {
    const url = (`http://localhost:3000/new_tab`);
    const tab = new Tab(DynamicWidgetsComponent, "Dynamic Widgets Comp");
    tab.id = this.tabs.length + 1;
    this.tabs.push(tab);
    this.tabSub.next(this.tabs);
    this.http.get(url, { responseType: 'text'}).subscribe(() => {
      console.log('new tab');
    });
    // this.postTab(tab);
  }

  removeTab(index: number): void {
    const url = (`http://localhost:3000/del_tab${index}`);
    this.tabs.splice(index, 1);
    this.tabSub.next(this.tabs);
    this.http.get(url, { responseType: 'text'}).subscribe(() => {
      console.log('del tab');
    });
  }

  clearAll() {
    this.tabs = [];
  }

  getTabs() {
    console.log('get_tabs');
    const url = (`http://localhost:3000/get_tabs`);
    this.http.get(url, { responseType: 'text'}).subscribe((data: any) => {
      const tabNum = JSON.parse(data);
      this.tabs = [];
      for (let i = 0; i < tabNum; i++)
        this.tabs.push(new Tab(DynamicWidgetsComponent, "Dynamic Widgets Comp"));
    });
    console.log(this.tabs);
  }

  getDeleteSaved() {
    console.log('get_delete_saved');
    const url = (`http://localhost:3000/delete_all_saved`);
    this.http.get(url, { responseType: 'text'}).subscribe((data: any) => {
      console.log('get_delete_saved');
    });
  }

  onTabChange() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }
}
