import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  Inputs: string ="Inputs";
  nombre: string;

  usuario = {
    mail: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(){
    console.log(this.usuario);
  }

}
