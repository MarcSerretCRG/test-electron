import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.css']
})
export class SidebarMainComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  public openFileDialog(): void {
    this.sidebarService.openModal();
  }

}
