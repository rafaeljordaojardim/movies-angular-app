import { Component } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  movies = []

  constructor(
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.movies = this.favoritesService.getFavorites();
  }

  remove(movieId: number) {
    this.movies = this.favoritesService.removeFavorite(+movieId);
  }
}
