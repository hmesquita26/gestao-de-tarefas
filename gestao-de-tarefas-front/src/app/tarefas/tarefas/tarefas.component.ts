import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  tarefas: Tarefa[] = [
    { _id: 1, titulo: 'Teste', descricao: 'descricao teste', estado: 'NÃO INICIADO' },
    { _id: 2, titulo: 'Teste', descricao: 'descricao teste', estado: 'NÃO INICIADO' },
    { _id: 3, titulo: 'Teste', descricao: 'descricao teste', estado: 'NÃO INICIADO' },
  ];
  displayedColumns = ['titulo', 'descricao', 'estado'];

  constructor() {}

  ngOnInit(): void {

  }

}
