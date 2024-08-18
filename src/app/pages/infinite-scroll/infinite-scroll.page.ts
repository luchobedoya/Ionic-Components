import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {


  @ViewChild(IonInfiniteScroll) InfiniteScroll: IonInfiniteScroll;

  titulo: string ="Infinite Scroll";

  data: any = Array(20);



  constructor() { }

  ngOnInit() {
  }


  loadData(event){
    console.log('Cargando lo siguientes ...');

    setTimeout(() => {

      if (this.data.length > 50) {
        event.target.complete();
        this.InfiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      console.log(this.data.length);
      if (this.data.length > 50) {
        this.InfiniteScroll.disabled = true;
        return;
      }else{
        console.log("entro");
        this.data.push(...nuevoArr);
        event.target.complete();
      }
     
    }, 2000);

  }

}
