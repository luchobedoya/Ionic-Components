import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Usuario } from '../../../../../../Angular/AngularServicesHomeWorks/src/app/Models/usuario';
import { Observable, observable } from 'rxjs';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  listas: string = "Listas";
  Usuarios: Observable<any>;


  constructor(
     private ds: DataService
    ) { }

  ngOnInit() {

    // this.ds.getUsers().subscribe((elemento)=>{
    //   console.log(elemento);
    // });

    this.Usuarios = this.ds.getUsers();

  }


  favorite(user){
    console.log('Favorite' , user);
    this.lista.closeSlidingItems();
  }


  share(user){
    console.log('share' , user);
    this.lista.closeSlidingItems();
  }

  unread(user){
    console.log('unread' , user);
    this.lista.closeSlidingItems();
  }




}
