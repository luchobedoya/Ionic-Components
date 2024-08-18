import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  checkBox: string ="Check Box";

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: false
    },
    {
      name: 'success',
      selected: false
    },
    {
      name: 'tertiary',
      selected: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(check){
    console.log(check);
  }



}
