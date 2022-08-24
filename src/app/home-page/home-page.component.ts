import { Component, OnInit } from '@angular/core';
import { MOVIE_DIRECTOR } from 'src/temp-db';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies = MOVIE_DIRECTOR;

  constructor() { }

  ngOnInit(): void {
  }

}