import { consultaAPI } from './../services/consultaAPI.service';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output } from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent implements OnInit {

  closeModal: string;
  items: any;
  pullzs: any;
  testing: any;

  constructor(
    private itemsService: consultaAPI,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.listarItems();
  }

  listarItems() {
    this.itemsService.listarItems().subscribe(
      (items) => {
        this.items = items;
      },
      (err) => {
        console.log('Erro', err);
      }
    );
  }

  abrirModal(content, url) {
    this.testing = url + "/pulls"
    this.itemsService.listarPulls(this.testing);
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

  listarPulls() {
    this.itemsService.listarPulls(this.testing).subscribe(
      (pulls) => {
        this.pullzs = pulls;
        console.log(pulls);
      },
      (err) => {
        console.log('Erro', err);
      }
    );
  }
}
