import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.css']
})
export class OptionsPageComponent implements OnInit {

  useTopNav = true;

  constructor(private navService: NavService) {}

  ngOnInit(): void {}

  switchNav() {
    if (this.useTopNav) {
      console.log("true!");
      this.useTopNav = false;
      this.navService.setNav(false);
    } else {
      console.log("false!");
      this.useTopNav = true;
      this.navService.setNav(true);
    }
  }
}