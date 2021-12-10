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
    isOptionBarVisible: boolean = false;
    constructor(private globalVariable: GlobalVariablesService, 
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2) {}

    ngOnInit(): void {
        this.globalVariable.sideBarVisibility.subscribe(data => {
            this.sideBarStatus = data;
        })
        this.globalVariable.optionBarVisibility.subscribe(data=>{
            this.isOptionBarVisible = data;
        })
        this.onShowOptionbar()
        this.onShowSidebar()
    }

    toggle() {
        this.sideBarStatus = !this.sideBarStatus
        this.globalVariable.updateSideBarVisibility(this.sideBarStatus)
        this.onShowSidebar()
    }

    onShowSidebar() {
        if(this.sideBarStatus) this.renderer.setAttribute(this.document.body, 'sidebar-status', 'shown');
        if(!this.sideBarStatus) this.renderer.setAttribute(this.document.body, 'sidebar-status', 'hidden');
    }

    OptionToggle() {
		this.isOptionBarVisible = !this.isOptionBarVisible
		this.globalVariable.updateOptionBarVisibility(this.isOptionBarVisible)
		this.onShowOptionbar()
	}

	onShowOptionbar() {
		if(this.isOptionBarVisible) this.renderer.setAttribute(this.document.body, 'optionbar-status', 'shown');
		if(!this.isOptionBarVisible) this.renderer.setAttribute(this.document.body, 'optionbar-status', 'hidden');
	}
}
