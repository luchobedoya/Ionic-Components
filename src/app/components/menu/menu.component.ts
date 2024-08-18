import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;
  componentesL: Componente[] = [];

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.getDataMenu();
    this.componentes = this.ds.getMenuOpts();
    console.log(this.componentes);
  }




  getDataMenu(){
    this.ds.getMenuOpts().subscribe((elementos)=>{
      this.componentesL = elementos;
      console.log(this.componentesL);
    })
  }





}
