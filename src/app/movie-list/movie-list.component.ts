import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movies = [];

  constructor(
    private moviesService: MoviesService
  ) {

  }

  ngOnInit() {
    this.moviesService.notifySearchMovies.subscribe(({movies}) => {
      this.movies = movies;
    });
    const searchResult = this.moviesService.getSearchResult();
    if (searchResult) {
      this.movies = searchResult.movies;
    }
  }
}
