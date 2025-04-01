import { Component,signal } from '@angular/core';

import { DUMMY_FAVS } from '../dummy-fav';

const randomIndex = Math.floor(Math.random() * DUMMY_FAVS.length)

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
   favBook =  signal(DUMMY_FAVS[randomIndex])

   onFavBook () {
    const randomIndex = Math.floor(Math.random() * DUMMY_FAVS.length)
    this.favBook.set(DUMMY_FAVS[randomIndex])
   }
  
  }
