import { consultaAPI } from './../services/consultaAPI.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { lstat } from 'fs';
import { disableDebugTools } from '@angular/platform-browser';
import { deepStrictEqual } from 'assert';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  closeModal: string;
  items: any;
  listPulls: any;
  apiUrl: any;
  pulls: any;
  verificaArray: boolean;

  constructor(
    private itemsService: consultaAPI,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.listarItems(); //faz request na api do github para trazer repositórios ao carregar página
  }

  listarItems() {       //metodo para fazer request de repositórios e guardar a response numa variável
    this.itemsService.listarItems().subscribe(
      (items) => {
        this.items = items;
      },
      (err) => {
        console.log('Erro', err);
      }
    );
  }

  abrirModal(content, url) {   //metodo para abrir o modal
    this.apiUrl = url + '/pulls';  // pega a url do usuário e cria uma rota /pulls
    this.itemsService.listarPulls(this.apiUrl);  //passa a variável contendo o link do próprio usuário
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {
          this.closeModal = `Closed with: ${res}`;
        },
        (res) => {
          this.closeModal = `Dismissed ${res}`;
        }
      );

    this.listarPulls();
  }

  listarPulls() { //metodo para fazer request de pulls e guardar a response numa variável
    this.itemsService.listarPulls(this.apiUrl).subscribe(
      (pulls) => {
        this.listPulls = pulls;
        if(this.listPulls < [0]){
          return this.verificaArray = true;
        }

      },
      (err) => {
        console.log('Erro', err);
      }
    );
  }
}
