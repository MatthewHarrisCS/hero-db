import { Component, OnInit } from '@angular/core';
import { nameToUrl } from '../shared-functions';
import { MOVIE_CONTENT_CARD, TV_CONTENT_CARD } from 'src/temp-db';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies = MOVIE_CONTENT_CARD;
  episodes = TV_CONTENT_CARD;

  constructor() { }

  toUrl(title: String) {
    return nameToUrl(title);
  }

  ngOnInit(): void {
  }

}