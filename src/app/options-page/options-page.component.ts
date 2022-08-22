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

  ngOnInit(): void {
    this.navService.getNav().subscribe((value) => {this.useTopNav = value});
  }

  switchNav() {
    if (this.useTopNav) {
      this.navService.setNav(false);
    } else {
      this.navService.setNav(true);
    }
  }
}