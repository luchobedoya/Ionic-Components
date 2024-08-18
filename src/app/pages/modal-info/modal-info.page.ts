import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {


  @Input() firstName;
  @Input() lastName;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modalController.dismiss();
  }


  salirConArgumentos(){
    this.modalController.dismiss({
      firstName: 'Iris',
      lastName: 'Bedoya'
    });
  }



}
