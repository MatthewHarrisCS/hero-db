import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  // when false, uses side nav instead
  private useTopNav: BehaviorSubject<boolean>;

  getNav() {
    return this.useTopNav.asObservable();
  }

  setNav(change: boolean): void {
    this.useTopNav.next(change);
  }

  constructor() { 
    this.useTopNav = new BehaviorSubject<boolean>(false);
  }
}