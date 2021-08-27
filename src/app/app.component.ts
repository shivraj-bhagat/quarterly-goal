import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './baselayout/sidebar/sidebar.component';
import { GlobalVariablesService } from './services/global-variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild(SidebarComponent) sidebar: SidebarComponent;
    constructor(private globalVariable: GlobalVariablesService) {
        this.globalVariable.sidebar.subscribe(value => {
            if(value == true) {
                this.sidebar.drawer.toggle();
                console.log(this.sidebar)
            }
        })
    }
}
