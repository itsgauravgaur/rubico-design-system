import { Component, OnInit } from '@angular/core';
import { RdsServicesService } from '../service/rds-services.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  comp:any;

  constructor(public rdsService: RdsServicesService) { 
    this.comp = this.rdsService.componentList;
  }

  ngOnInit() {
    
  }
 

}
