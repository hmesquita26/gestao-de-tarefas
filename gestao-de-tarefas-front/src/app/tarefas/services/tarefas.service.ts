import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly API = '/assets/tarefas.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Tarefa[]>(this.API)
    .pipe(
      first(),
      tap(tarefas => console.log(tarefas))
    );
  }
}
