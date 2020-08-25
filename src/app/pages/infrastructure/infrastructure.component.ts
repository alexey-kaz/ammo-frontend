import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tab} from "../main-page/tab.model";
import {DynamicWidgetsComponent} from "../main-page/components/dynamicWidgets/dynamicWidgets.component";

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
    console.log('test zabbix connection');
    this.http.post(this.url, {
      "jsonrpc": "2.0",
      "method": "user.login",
      "params": {
        "user": "Admin",
        "password": "zabbix",
      },
      "id": this.id,
      "auth": null,
    }).subscribe((data: any) => {
        this.auth = data['result'];
        console.log(data);
      },
      error => console.log(error),
    );
  }
  values = new Array<string>();
  selectedOption;
  onKey(event: any) {
    this.values.push(event.target.value);
    console.log(this.values);
    this.http.post(this.url, {
      "jsonrpc": "2.0",
      "method": "hostgroup.get",
      "params": {
        "output": "extend",
      },
      "auth": this.auth,
      "id": 1,
    }).subscribe((data: any) => {
      console.log("All groups");
      console.log(data);
    },
      error => console.log(error),
    );
    this.http.post(this.url, {
      "jsonrpc": "2.0",
      "method": "template.get",
      "params": {
        "output": "extend",
      },
      "auth": this.auth,
      "id": 1,
    }).subscribe((data: any) => {
        console.log("All templates");
        console.log(data);
      },
      error => console.log(error),
    );
    console.log('test zabbix host create');
    this.http.post(this.url, {
      "jsonrpc": "2.0",
      "method": "host.create",
      "params": {
        "host": "Linux server",
        "interfaces": [
          {
            "type": 1,
            "main": 1,
            "useip": 1,
            "ip": this.values[0],
            "dns": "",
            "port": "10050",
          },
        ],
        "groups": [
          {
            "groupid": "6",
          },
        ],
        "templates": [
          {
            "templateid": "10186",
          },
        ],
      },
      "auth": this.auth,
      "id": 1,
    }).subscribe((data: any) => {
        this.host_id = data['result']['hostids'];
        console.log(data);
      },
      error => console.log(error),
    );
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
