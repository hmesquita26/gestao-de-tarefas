import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from '../../lista-tarefas.component';

const routes: Routes = [
  { path: '', component: ListaTarefasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaTarefasRoutingModule { }
