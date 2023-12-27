import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

@Injectable()
export class FavoritesService {

  private KEY_FAVORITE_MOVIES = "KEY_FAVORITE_MOVIES";
  private movies = [];

  constructor(
    private localStorage: LocalStorageService
  ) {}

  addFavoriteMovie(movie) {
    this.movies.push(movie);
    this.localStorage.set(this.KEY_FAVORITE_MOVIES, { movies: this.movies });
  }

  getFavoriteMovie(id: number) {
    return this.getFavorites().find(movie => movie.id == id);
  }

  getFavorites() {
    const data = this.localStorage.get(this.KEY_FAVORITE_MOVIES);
    if (data) {
      return data.movies.slice();
    }
    return [];
  }

  removeFavorite(movieId: number) {
    const data = this.localStorage.get(this.KEY_FAVORITE_MOVIES);
    if (data) {
      const newMovies = data.movies.filter(movie=>movie.id != movieId);
      this.movies = newMovies;
      this.localStorage.set(this.KEY_FAVORITE_MOVIES, { movies: this.movies });
      return this.movies;
    }
  }
}