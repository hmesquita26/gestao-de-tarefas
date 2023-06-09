import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  tarefas: Tarefa[] = [];
  displayedColumns = ['titulo', 'descricao', 'estado'];

  constructor(private tarefasService: TarefasService) {

  }

  ngOnInit(): void {
    this.tarefas = this.tarefasService.list();
  }

}
