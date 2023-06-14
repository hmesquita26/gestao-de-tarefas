import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaService } from '../tarefa/service/tarefa.service';
import { Estado, Tarefa } from '../tarefa/model/tarefa.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  @Input() estado: string = '';
  tarefas: Observable<Tarefa[]>;
  displayedColumns = ['titulo', 'descricao', 'estado', 'acoes'];
  pathEstado: string = '';
  nomeListagem: string = 'ARQUIVADA';

  constructor(private tarefaService: TarefaService, private router: ActivatedRoute) {
    this.pathEstado = this.router.snapshot.data['pathEstado'];
    this.tarefas = this.tarefaService.listarTarefas(this.pathEstado);
  }

  ngOnInit(): void {
    if (this.pathEstado == undefined) {
      this.tarefas = this.tarefaService.listarTarefas(this.estado);
      this.nomeListagem = this.estado;
    } else {
      this.nomeListagem = this.pathEstado;
    }

  }

}
