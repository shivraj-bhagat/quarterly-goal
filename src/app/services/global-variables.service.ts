import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GlobalVariablesService {
    sidebar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor() {}

    setSidebar(value: boolean) {
        this.sidebar.next(value);
    }
}
