import {Component} from '@angular/core';

@Component({
  selector: 'ngx-infrastructure',
  templateUrl: './infrastructure.component.html',
})
export class InfrastructureComponent {
  constructor() {}
  values = new Array<string>();
  selectedOption;
  onKey(event: any) {
    this.values.push(event.target.value);
    console.log(this.values);
  }
}

