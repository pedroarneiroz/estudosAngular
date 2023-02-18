import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = false;

  public list: Array<{nome: string, idade: number}> = [
    { nome: "Pedro Monteiro", idade: 36 },
    { nome: "Aline Monteiro", idade: 29 },
    { nome: "Dandara Monteiro", idade: 27 },
    { nome: "João Monteiro", idade: 22 },
    { nome: "Thiago Monteiro", idade: 19 }
  ];

  public nome: string = 'pedro';
  constructor() {}

  ngOnInit(): void {
    setInterval(() => { 
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }      
    }, 2000);
  }

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Nay", idade: 18});    
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1);
  }

}
