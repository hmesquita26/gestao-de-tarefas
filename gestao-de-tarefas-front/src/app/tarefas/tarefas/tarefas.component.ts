import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { TarefasService } from '../services/tarefas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  tarefas: Observable<Tarefa[]>;
  displayedColumns = ['titulo', 'descricao', 'estado'];

  constructor(private tarefasService: TarefasService) {
    this.tarefas = this.tarefasService.list();
  }

  ngOnInit(): void {

  }

}
