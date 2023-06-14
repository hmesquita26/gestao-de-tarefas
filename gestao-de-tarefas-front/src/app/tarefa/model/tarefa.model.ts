export interface Tarefa {
  _id: number;
  titulo: string,
  descricao: string,
  estado: Estado
}

export enum Estado {
  NAO_INICIADA = 'NAO_INICIADA',
  EM_PROGRESSO = 'EM_PROGRESSO',
  FINALIZADA = 'FINALIZADA',
  ARQUIVADA = 'ARQUIVADA'
}
