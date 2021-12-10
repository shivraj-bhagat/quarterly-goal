import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

    isSideBarVisible: boolean = false;
    constructor(private globalVariable: GlobalVariablesService,
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2) {}

    ngOnInit(): void {
        this.globalVariable.sideBarVisibility.subscribe(data=>{
            this.isSideBarVisible = data
        })
        this.onShowSidebar()
    }

    toggle() {
        this.isSideBarVisible = !this.isSideBarVisible
        this.globalVariable.sideBarVisibility.next(this.isSideBarVisible)
        this.onShowSidebar()
    }

    onShowSidebar() {
        if(this.isSideBarVisible) this.renderer.setAttribute(this.document.body, 'sidebar-status', 'shown');
        if(!this.isSideBarVisible) this.renderer.setAttribute(this.document.body, 'sidebar-status', 'hidden');
    }
}
