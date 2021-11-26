import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    sideBarStatus: boolean = false;
    constructor(private globalVariable: GlobalVariablesService, 
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,) {}

    ngOnInit(): void {
        this.globalVariable.sideBarVisibility.subscribe(data => {
            this.sideBarStatus = data
        })
        this.onShowSidebar()
    }

    toggle() {
        this.sideBarStatus = !this.sideBarStatus
        this.globalVariable.sideBarVisibility.next(this.sideBarStatus)
        this.onShowSidebar()
    }

    onShowSidebar() {
        if(this.sideBarStatus) this.renderer.setAttribute(this.document.body, 'sidebar-status', 'shown');
        if(!this.sideBarStatus) this.renderer.setAttribute(this.document.body, 'sidebar-status', 'hidden');
    }

    toggleLayout() {
        let layout = this.document.getElementsByTagName("body")[0].getAttribute("layout");
        if(layout == "first") {
            this.renderer.setAttribute(this.document.body,"layout","second")
        } else {
            this.renderer.setAttribute(this.document.body,"layout","first")
        }
    }

}
