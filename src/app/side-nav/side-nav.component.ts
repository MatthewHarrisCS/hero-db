import { Component, Input, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  expanded = true;

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navService.getMax().subscribe((value) => {this.expanded = value});
  }

  ngOnDestroy(): void {
    this.navService.setMax(true);
  }

  expand() {
    this.navService.setMax(true);
  }
  
  minimize() {
    this.navService.setMax(false);
  }

}
