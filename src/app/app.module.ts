import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { consultaAPI } from './services/consultaAPI.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LOCALE_ID } from '@angular/core';
import { RodapeComponent } from './rodape/rodape.component';






@NgModule({
  declarations: [
      AppComponent,
      CardsComponent,
      HeaderComponent,
      RodapeComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en'} , HttpClientModule,consultaAPI, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
