import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

    isSideBarVisible: boolean = false;
    constructor(private globalVariable: GlobalVariablesService) {}

    ngOnInit(): void {
        this.globalVariable.sideBarVisibility.subscribe(data=>{
            this.isSideBarVisible = data
        })
    }
}
