import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The Reading Club';
}
