import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
	selector: 'app-optionbar',
	templateUrl: './optionbar.component.html',
	styleUrls: ['./optionbar.component.scss']
})
export class OptionbarComponent implements OnInit {

	isOptionBarVisible: boolean = false;
	selectedLayout: any = "first";
	layouts = [
		{
			title: "Highlighted Top Nav",
			name: "first",
			image: "../../../assets/img/layout/layout-first.svg" 
		},
		{
			title: "Highlighted Side Menu",
			name: "second",
			image: "../../../assets/img/layout/layout-second.svg" 
		},
		{
			title: "Highlighted Combo",
			name: "third",
			image: "../../../assets/img/layout/layout-third.svg" 
		},
		{
			title: "Side Nav + Side Menu",
			name: "fourth",
			image: "../../../assets/img/layout/layout-forth.svg" 
		},
	]

	constructor(private globalVariable: GlobalVariablesService,
		@Inject(DOCUMENT) private document: Document,
		private renderer: Renderer2) {}

	ngOnInit(): void {
		this.globalVariable.isOptionBarVisible.subscribe(data=> {
			this.isOptionBarVisible = data
		})
		this.onShowOptionbar();
	}

	OptionToggle() {
		this.isOptionBarVisible = false;
		this.globalVariable.updateOptionBarVisibility(false);
		this.onShowOptionbar()
	}

	onShowOptionbar() {
		if(this.isOptionBarVisible) this.renderer.setAttribute(this.document.body, 'optionbar-status', 'shown');
		if(!this.isOptionBarVisible) this.renderer.setAttribute(this.document.body, 'optionbar-status', 'hidden');
	}

	previewLayout() {
		this.renderer.setAttribute(this.document.body,"layout",this.selectedLayout);
		this.OptionToggle();
	}
}
