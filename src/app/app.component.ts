import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  reloadFunc: any = null;

  constructor() {}

  getFuncFromChild(func: Function) {
    this.reloadFunc = func;
  }

  shouldReload(value:boolean){
    this.reloadFunc()
  }
}
