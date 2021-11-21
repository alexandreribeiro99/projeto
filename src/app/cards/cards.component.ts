import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ItemsService } from '../items.service';
import { ItemsComponent } from '../items/items.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  closeModal: string;
  items: any;
  pull: any;

  constructor(private ItemsService: ItemsService,
    private modalService: NgbModal,
    private http: HttpClient) { }

  ngOnInit() {
    this.listarItems();
    this.pull = this.items.total_count;
    console.log("aborobora");
  }

  listarItems(){
    this.ItemsService.listarItems().subscribe(items => {
      this.items = items;
    } , err => {
      console.log('Erro', err)
    })

  }

  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${(res)}`;
    });
  }

  listarPulls(){
    this.ItemsService.listarItems().subscribe(items => {
      this.items = items;
    } , err => {
      console.log('Erro', err)
    })

  }


}

