import { Component } from '@angular/core';
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

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navService.getNav().subscribe((value) => {this.useTopNav = value});
    this.navService.getMax().subscribe((value) => {this.expanded = value});
  }

  sideNavMaxed() {
    if (this.expanded && !this.useTopNav) {
      return 'expandedSide';
    } else {
      return '';
    }
  }
}