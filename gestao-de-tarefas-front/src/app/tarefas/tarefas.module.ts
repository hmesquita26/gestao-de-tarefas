import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasComponent } from './tarefas/tarefas.component';


@NgModule({
  declarations: [
    TarefasComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule
  ]
})
export class TarefasModule { }
