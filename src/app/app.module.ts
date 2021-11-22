
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { consultaAPI } from './services/consultaAPI.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';





@NgModule({
  declarations: [
      AppComponent,
      CardsComponent,
      HeaderComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [HttpClientModule,consultaAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
