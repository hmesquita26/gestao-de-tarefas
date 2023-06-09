import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private httpClient: HttpClient) { }

  list() {
    return [
      { _id: 1, titulo: 'Teste', descricao: 'descricao teste', estado: 'NÃO INICIADO' },
      { _id: 2, titulo: 'Teste', descricao: 'descricao teste', estado: 'NÃO INICIADO' },
      { _id: 3, titulo: 'Teste', descricao: 'descricao teste', estado: 'NÃO INICIADO' },
    ];
  }
}
