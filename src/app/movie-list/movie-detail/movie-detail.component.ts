import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movieSelected = undefined;
  isFavorited = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.movieSelected = this.activatedRoute.snapshot.data.movieSelected;
  
    console.log(this.movieSelected);
    this.isFavorited = !!this.favoritesService.getFavoriteMovie(this.movieSelected.id);
  }

  onAddFavorites() {
    if (this.movieSelected) {
      this.favoritesService.addFavoriteMovie(this.movieSelected);
      this.isFavorited = true;
    }
  }
}
