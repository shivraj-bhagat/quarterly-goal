import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    sideBarStatus: boolean = false;
    constructor(private globalVariable: GlobalVariablesService) {}

    ngOnInit(): void {
        this.globalVariable.sideBarVisibility.subscribe(data => {
            this.sideBarStatus = data
        })
    }

    toggle() {
        this.sideBarStatus = !this.sideBarStatus
        this.globalVariable.sideBarVisibility.next(this.sideBarStatus)
    }
}
