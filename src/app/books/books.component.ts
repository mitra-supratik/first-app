import { Component } from '@angular/core';

import { DUMMY_FAVS } from '../dummy-fav';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
   selectedBook = DUMMY_FAVS[0]

   get imagePath() {
    return '../assets/books/' + this.selectedBook.coverpage;
   }


   onSelectedBook() {
    const randomIndex=Math.floor(Math.random() * DUMMY_FAVS.length);
    this.selectedBook = DUMMY_FAVS[randomIndex];
   }
}
