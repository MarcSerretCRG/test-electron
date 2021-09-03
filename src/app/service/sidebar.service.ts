import { Injectable } from '@angular/core';
import { IpcRenderer, RemoteMainInterface } from 'electron';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private ipc: IpcRenderer;


  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
        this.readResponsesIPC();
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
  }

  openModal(): void {
    console.log("Open a modal");
    this.ipc.send("openDialog");
  }

  readResponsesIPC(): void {
    this.ipc.on("getPathResponse", (event) => {
      console.log(event);
    });
  }
}
