import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GlobalVariablesService {

    sideBarVisibility = new BehaviorSubject<boolean>(false);
    isSideBarVisible = this.sideBarVisibility.asObservable();
    optionBarVisibility = new BehaviorSubject<boolean>(false);
    isOptionBarVisible = this.optionBarVisibility.asObservable();
    constructor() {}

    updateSideBarVisibility(value: boolean) {
        this.sideBarVisibility.next(value);
    }

    updateOptionBarVisibility(value: boolean) {
        this.optionBarVisibility.next(value);
    }
}
