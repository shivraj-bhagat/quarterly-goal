import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GlobalVariablesService {

    sideBarVisibility = new Subject<boolean>();
    constructor() {
        this.sideBarVisibility.next(false);
    }
}
