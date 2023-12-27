import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { LocalStorageService } from "./local-storage.service";

@Injectable()
export class MoviesService {
  public notifySearchMovies = new EventEmitter<any>();

  private KEY_SEARCH_RESPONSE = "KEY_SEARCH_RESPONSE";
  
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
 
  }

  public searchMovies(word, page = 1) {
    this.http.get(`https://api.themoviedb.org/3/search/movie?&api_key=feb6f0eeaa0a72662967d77079850353&page=${page}&query=${word}`)
    .pipe(map(res => {
      const response = res as any;
       const {results, ...rest } = response; 
       const movies = [];
       for (const result of results) {
        movies.push({ title: result.title, imagePath: result.poster_path, 
          releaseDate: result.release_date, overview: result.overview, id: result.id });
       }
  
       return {movies, ...rest };
    }))
      .subscribe(response => {
        this.localStorage.set(this.KEY_SEARCH_RESPONSE, response);
        this.notifySearchMovies.emit(response);
      })
  }

  public getSearchResult() {
    const searchResult =  this.localStorage.get(this.KEY_SEARCH_RESPONSE);
    if (searchResult) {
      return { ...searchResult, movies: searchResult.movies.slice()};
    }
    return null;
  }

  public getMovie(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?&api_key=feb6f0eeaa0a72662967d77079850353`)
    .pipe(map(result => {
      const response = result as any;
      return { title: response.title, imagePath: response.poster_path, 
        releaseDate: response.release_date, overview: response.overview, id: response.id }
    }))
  }
}