import { Component } from '@angular/core';
import { IpcRenderer, RemoteMainInterface } from 'electron';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private ipc: IpcRenderer;

  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
  }
  title = 'demo-electron-angular';

  openModal(){
    console.log(this.ipc);
    
    console.log("Open a modal");
    this.ipc.send("openModal");
  }



}
