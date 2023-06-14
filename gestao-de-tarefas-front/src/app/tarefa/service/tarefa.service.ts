import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado, Tarefa } from '../model/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private baseUrl = 'http://localhost:8080';
  private endpoint = 'tarefas'

  constructor(private httpClient: HttpClient) { }

  listarTarefas(estado: string) {

    switch(estado) {
      case Estado.NAO_INICIADA: {
        return this.listarNaoIniciadas();
      }
      case Estado.EM_PROGRESSO: {
        return this.listarEmProgresso();
      }
      case Estado.FINALIZADA: {
        return this.listarFinalizadas();
      }
      case Estado.ARQUIVADA: {
        return this.listarArquivadas();
      }
      default: {
        return this.httpClient.get<Tarefa[]>(`${this.baseUrl}/${this.endpoint}`);
      }

    }
  }

  listarNaoIniciadas() {
    return this.httpClient.get<Tarefa[]>(`${this.baseUrl}/${this.endpoint}/nao-iniciadas`);
  }

  listarEmProgresso() {
    return this.httpClient.get<Tarefa[]>(`${this.baseUrl}/${this.endpoint}/em-progresso`);
  }

  listarFinalizadas() {
    return this.httpClient.get<Tarefa[]>(`${this.baseUrl}/${this.endpoint}/finalizadas`);
  }

  listarArquivadas() {
    return this.httpClient.get<Tarefa[]>(`${this.baseUrl}/${this.endpoint}/arquivadas`);
  }

  cadastrarTarefa(tarefa: Tarefa) {
    tarefa.estado = Estado.NAO_INICIADA;
    return this.httpClient.post<Tarefa>(`${this.baseUrl}/${this.endpoint}`, tarefa);
  }

  atualizarTarefa(tarefa: Tarefa){
    return this.httpClient.put<Tarefa>(`${this.baseUrl}/${this.endpoint}/${tarefa._id}`, tarefa);
  }

  pesquisarPorId(id: number) {
    return this.httpClient.get<Tarefa>(`${this.baseUrl}/${this.endpoint}/${id}`);
  }

  arquivarTarefa(tarefa: Tarefa){
    return this.httpClient.patch<Tarefa>(`${this.baseUrl}/${this.endpoint}/${tarefa._id}/arquivar`, tarefa);
  }
}
