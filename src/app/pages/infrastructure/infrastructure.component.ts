import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'ngx-infrastructure',
  templateUrl: './infrastructure.component.html',
})
export class InfrastructureComponent {
  url = `http://172.30.7.141:8081/api_jsonrpc.php`;
  auth = null;
  host_id = null;
  id = 0;
  constructor(private http: HttpClient) {
  }
  values = new Array<string>();
  selectedOption;
  onKey(event: any) {
    this.values.push(event.target.value);
    console.log(this.values);
    // this.http.post(this.url, {
    //   "jsonrpc": "2.0",
    //   "method": "hostgroup.get",
    //   "params": {
    //     "output": "extend",
    //   },
    //   "auth": this.auth,
    //   "id": 1,
    // }).subscribe((data: any) => {
    //   console.log("All groups");
    //   console.log(data);
    // },
    //   error => console.log(error),
    // );
    // this.http.post(this.url, {
    //   "jsonrpc": "2.0",
    //   "method": "template.get",
    //   "params": {
    //     "output": "extend",
    //   },
    //   "auth": this.auth,
    //   "id": 1,
    // }).subscribe((data: any) => {
    //     console.log("All templates");
    //     console.log(data);
    //   },
    //   error => console.log(error),
    // );
    this.http.post(this.url, {
      "jsonrpc": "2.0",
      "method": "item.get",
      "params": {
        "output": "extend",
      },
      "hostids": this.host_id,
      "search": {
        "key_": "agent",
      },
      "sortfield": "name",
    });
  }
}
