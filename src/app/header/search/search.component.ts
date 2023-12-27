import { Component, ElementRef, Input, ViewChild, ViewRef } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @ViewChild('inputSearch', {static: true}) searchKey: ElementRef;
  @Input('disabled') disabled = false;
  searchResult = undefined;
  lastSearchKey = undefined;
  constructor(public moviesService: MoviesService) {}
  ngOnInit() {
    this.moviesService.notifySearchMovies.subscribe(searchResult => {
      this.searchResult = searchResult;
    });
  }
  searchMovies() {
    const searchKey = this.searchKey.nativeElement.value;
    this.moviesService.searchMovies(searchKey);
    this.lastSearchKey = searchKey;
  }
  // paginação feita da minha cabeça
  moveToPage(page) {
    this.moviesService.searchMovies(this.lastSearchKey, page);
    this.lastSearchKey = this.lastSearchKey;
  }

  getArrayOfPages() {
    if ( this.searchResult) {
      console.log(this.searchResult);
      
      const totalPages = this.searchResult.total_pages;
      const pages = [];
      for (let index = 1; index <= totalPages; index++) {
        pages.push(index);
    
      }
      return pages;
    }
  }
}
