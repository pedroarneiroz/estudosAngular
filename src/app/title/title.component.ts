import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
@Input() export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  public title: string = 'Bem vindo!'

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
  ngOnChanges(): void { }

  OnDestroy(): void {
    console.log("Deu bom, esse componente foi destruído!");
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //     console.log("Foi alterado com sucesso!");
  // }

}
