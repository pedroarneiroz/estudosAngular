import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    { nome: "Pedro Monteiro", idade: 36 },
    { nome: "Mara Wanessa", idade: 35 },
    { nome: "Ana Clarisse", idade: 3 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

 public getDados(event: number){
  this.enviarDados.emit(this.list[event]);
  }

}
