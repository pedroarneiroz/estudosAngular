import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Pedro";
  public idade: number = 35;
  public maisUm: number = 1;

  public chackedDisabled: boolean = false;
  public imgSrc: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public imgTitle: string = "Property Biding"

  public position: {x: number, y:number} = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {
  }

  
  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}











