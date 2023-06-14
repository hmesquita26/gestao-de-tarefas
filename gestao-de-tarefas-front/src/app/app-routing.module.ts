import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarefas/todas', component: ListaTarefasComponent, data: {pathEstado: 'todas'}  },
  {
    path: 'tarefas/cadastrar',
    loadChildren: () => import('./cadastrar-editar-tarefa/cadastrar-editar-tarefa.module').then(modulo => modulo.CadastrarEditarTarefaModule)
  },
  {
    path: 'tarefas/editar/:id',
    loadChildren: () => import('./cadastrar-editar-tarefa/cadastrar-editar-tarefa.module').then(modulo => modulo.CadastrarEditarTarefaModule)
  },
  {
    path: 'tarefas/arquivadas',
    component: ListaTarefasComponent, data: {pathEstado: 'ARQUIVADA'}
  },
  {
    path: 'tarefas/:id/arquivar',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

