import { CadastarEditarTarefaComponent } from './cadastar-editar-tarefa/cadastar-editar-tarefa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaResolverService } from './tarefa-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CadastarEditarTarefaComponent,
    // resolve: {
    //   tarefa: TarefaResolverService
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrarEditarTarefaRoutingModule { }
