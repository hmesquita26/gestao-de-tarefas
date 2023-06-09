import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasComponent } from './tarefas/tarefas.component';
import {AppMaterialModule} from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    TarefasComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    AppMaterialModule
  ]
})
export class TarefasModule { }
