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
  savedTabs;
  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.savedTabs = this.tabs;
    this.tabs.push(new Tab(DynamicWidgetsComponent, "Dynamic Widgets Comp"));
    this.tabSub.subscribe(tabs => {
      this.tabs = tabs;
    });
    this.http.get('http://localhost:3000/new_tab', { responseType: 'text'}).subscribe((data: any) => {
      console.log('new tab');
    });
    console.log(this.tabs[0].component);
  }

  addNewTab() {
    const url = (`http://localhost:3000/new_tab`);
    const tab = new Tab(DynamicWidgetsComponent, "Dynamic Widgets Comp");
    tab.id = this.tabs.length + 1;
    this.tabs.push(tab);
    this.tabSub.next(this.tabs);
    this.http.get(url, { responseType: 'text'}).subscribe((data: any) => {
      console.log('new tab');
    });
  }

  removeTab(index: number): void {
    const url = (`http://localhost:3000/del_tab${index}`);
    this.tabs.splice(index, 1);
    this.tabSub.next(this.tabs);
    this.http.get(url, { responseType: 'text'}).subscribe((data: any) => {
      console.log('del tab');
    });
  }

  clearAll() {
    this.tabs = [];
  }

  saveAll() {
    this.savedTabs = this.tabs;
    // console.log(this.savedTabs);
  }

  loadSavedTabs() {
    this.tabs = this.savedTabs;
    this.savedTabs = [];
  }
}
