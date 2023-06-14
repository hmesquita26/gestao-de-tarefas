import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarEditarTarefaRoutingModule } from './cadastrar-editar-tarefa-routing.module';
import { CadastarEditarTarefaComponent } from './cadastar-editar-tarefa/cadastar-editar-tarefa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    CadastarEditarTarefaComponent
  ],
  imports: [
    CommonModule,
    CadastrarEditarTarefaRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule
  ]
})
export class CadastrarEditarTarefaModule { }
