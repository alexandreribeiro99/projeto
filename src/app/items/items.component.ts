import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';
import { DoBootstrap } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

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

}
