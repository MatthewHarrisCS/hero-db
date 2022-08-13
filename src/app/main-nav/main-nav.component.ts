import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  useTopNav = true;

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.getNav().subscribe((value) => {this.useTopNav = value});
  }
}
