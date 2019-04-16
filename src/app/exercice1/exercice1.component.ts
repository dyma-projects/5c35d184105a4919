import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public propriete: string; 
  public evenement: string;
  public variable: string;

  constructor() {
    this.propriete = "https://s3-eu-west-1.amazonaws.com/tpd/logos/5c06a8399de74e0001ab5a48/0x0.png";
    this.evenement = "";
    this.variable = "";
   }

  ngOnInit() {
  }

}
