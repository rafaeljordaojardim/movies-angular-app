import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  @Input("movieItem") movie;
  @Input("staticCard") static = false;

  constructor(private router: Router) {}


  onMovieClick() {
    if (!this.static) {
      this.router.navigate(['movies', this.movie.id]);
    }
  }

}
