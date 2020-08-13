import {Component, OnInit} from '@angular/core';
import {Tab} from "./tab.model";
import {TabService} from "./tab.service";
import {DynamicWidgetsComponent} from "./components/dynamicWidgets/dynamicWidgets.component";

@Component({
  selector: 'ngx-main',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number;

  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  tabChanged(event) {
    console.log("tab changed");
  }

  addNewTab() {
    this.tabService.addTab(
      new Tab(DynamicWidgetsComponent, "Dynamic Widgets Comp", { parent: "AppComponent" }),
    );
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }
}
