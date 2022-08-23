import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  // when false, uses side nav instead
  private useTopNav: BehaviorSubject<boolean>;
  private sideNavMaxed: BehaviorSubject<boolean>;

  getNav() {
    return this.useTopNav.asObservable();
  }

  setNav(change: boolean): void {
    this.useTopNav.next(change);
  }

  getMax() {
    return this.sideNavMaxed.asObservable();
  }

  setMax(change: boolean): void {
    this.sideNavMaxed.next(change);
  }

  constructor() { 
    this.useTopNav = new BehaviorSubject<boolean>(true);
    this.sideNavMaxed = new BehaviorSubject<boolean>(true);
  }
}