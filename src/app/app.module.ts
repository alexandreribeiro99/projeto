
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsService } from './items.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';




@NgModule({
  declarations: [
      AppComponent,
      ItemsComponent,
      CardsComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
