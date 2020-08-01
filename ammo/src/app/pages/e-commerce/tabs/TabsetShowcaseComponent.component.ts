import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbTableModule, NbTabComponent, NbTable, NbTabsetComponent } from '@nebular/theme';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalComponent as ModalComponent } from './modal.component';




import {CompactType, GridsterConfig, GridsterItem, GridType} from 'ngx-gridster';



@Component({
  selector: 'nb-tabset-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './TabsetShowcaseComponent.component.html',
  styleUrls: ['./TabsetShowcaseComponent.component.scss'],
  
})

export class TabsetShowcaseComponents implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  tabs = [ { title: 'Users', active: false }, { title: 'Tab2', active: true } ];
  task: string;
  tab: string;
  dialog: MatDialog;
  tasks = [];
  animal: string;
  name: string;
  public matDialog: MatDialog;
  


  

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: TabsetShowcaseComponents.itemChange,
      itemResizeCallback: TabsetShowcaseComponents.itemResize,
      
      gridType: GridType.Fit,
      compactType: CompactType.None,
      maxCols: 10,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
      
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 3, rows: 2, y: 1, x: 4},
      {cols: 1, rows: 1, y: 4, x: 5},
      {cols: 1, rows: 1, y: 2, x: 1},
      {cols: 2, rows: 2, y: 5, x: 5},
      {cols: 2, rows: 2, y: 3, x: 2},
      {cols: 2, rows: 1, y: 2, x: 2},
      {cols: 1, rows: 1, y: 3, x: 4},
      {cols: 1, rows: 1, y: 0, x: 6}
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  tabCreation() {

    
  }


  
  

  onClick(){
   
    const dialogRef = this.dialog.open(TabsetShowcaseComponents, {
      width: '250px',
      data: {name: this.tab }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.tab = result;
    });


    
  } 

 
  
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
  
  
} 




/*static itemChange(item, itemComponent) {
  console.info('itemChanged', item, itemComponent);
}

static itemResize(item, itemComponent) {
  console.info('itemResized', item, itemComponent);
}

ngOnInit() {
  this.options = {
    itemChangeCallback: AppComponent.itemChange,
    itemResizeCallback: AppComponent.itemResize,
  };

  this.dashboard = [
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 2, rows: 2, y: 0, x: 2}
  ];
}

changedOptions() {
  this.options.api.optionsChanged();
}

removeItem(item) {
  this.dashboard.splice(this.dashboard.indexOf(item), 1);
}

addItem() {
  this.dashboard.push({});
}

/*export class TabsetShowcaseComponents {
} */