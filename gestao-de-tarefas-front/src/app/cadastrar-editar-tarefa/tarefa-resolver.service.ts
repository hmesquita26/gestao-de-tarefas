import { TarefaService } from 'src/app/tarefa/service/tarefa.service';
import { Injectable } from '@angular/core';
import { Tarefa } from '../tarefa/model/tarefa.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaResolverService implements Resolve<Tarefa>{

  constructor(private tarefaService: TarefaService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Tarefa> | Promise<Tarefa>|Tarefa {
      const id = route.params["id"];
      if (id) {
        console.log(id);
        console.log(this.tarefaService.pesquisarPorId(id));
        return this.tarefaService.pesquisarPorId(id);
      }
      return empty();
  }
}
