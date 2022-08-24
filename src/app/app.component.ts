import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hero-DB';

  useTopNav = true;
  expanded = true;

  constructor(private navService: NavService, private route: Router) {}

  ngOnInit(): void {
    this.navService.getNav().subscribe((value) => {this.useTopNav = value});
    this.navService.getMax().subscribe((value) => {this.expanded = value});
  }

  sideNavMaxed() {
    if (this.expanded && !this.useTopNav && this.route.url != "/") {
      return 'expandedSide';
    } else {
      return '';
    }
  }
}