import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { EntityComponent } from './entity/entity.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { HeaderComponent } from './header/header.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { EntityOverviewComponent } from './pages/entity-overview/entity-overview.component';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServersComponent,
    EntityComponent,
    HeaderComponent,
    TopnavbarComponent,
    FavouritesComponent,
    EntityOverviewComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridAngular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
