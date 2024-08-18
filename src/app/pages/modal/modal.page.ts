import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  titulo: string = "Modal";
  retornoModal:any[] =[];



  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async AbrirModal(){
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        'firstName': 'Luis',
        'lastName': 'Bedoya'
      }
    });


    await modal.present();

    const { data } = await modal.onDidDismiss();

   //this.retornoModal = data;
    console.log('data retornada', data);

  }

}
