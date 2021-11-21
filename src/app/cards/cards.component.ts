import { Component, OnInit, Output } from '@angular/core';
import { ItemsService } from '../items.service';
import { ItemsComponent } from '../items/items.component';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  items: any;

  constructor(private ItemsService: ItemsService) { }

  ngOnInit() {
    this.listarItems();
    console.log(this.items);
  }

  listarItems(){
    this.ItemsService.listarItems().subscribe(items => {
      this.items = items;
    } , err => {
      console.log('Erro', err)
    })

  }

  openModalDialog(){
    this.display='block'; //Set block css
 }

 closeModalDialog(){
  this.display='none'; //set none css after close dialog
 }


}
