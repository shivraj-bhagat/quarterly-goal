import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    constructor(private globalVaribale: GlobalVariablesService) {}

    ngOnInit(): void {}

    toggle() {
        this.globalVaribale.setSidebar(true);
    }
}
