
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsService } from './items.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
      AppComponent,
      ItemsComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
