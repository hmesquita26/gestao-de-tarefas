import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/tarefa/model/tarefa.model';
import { TarefaService } from 'src/app/tarefa/service/tarefa.service';

@Component({
  selector: 'app-cadastar-editar-tarefa',
  templateUrl: './cadastar-editar-tarefa.component.html',
  styleUrls: ['./cadastar-editar-tarefa.component.css']
})
export class CadastarEditarTarefaComponent {

  tarefa!: Tarefa;
  formGroup: FormGroup;

  constructor(
    private tarefaService: TarefaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.formGroup = this.formBuilder.group({
        id: [(this.tarefa && this.tarefa._id) ? this.tarefa._id : null],
        titulo: [(this.tarefa && this.tarefa.titulo) ? this.tarefa.titulo : null, Validators.required],
        descricao: [(this.tarefa && this.tarefa.descricao) ? this.tarefa.descricao: null],
        estado: [(this.tarefa && this.tarefa.estado) ? this.tarefa.estado : null]
      })
  }

  ngOnInit() {
    this.tarefa = this.activatedRoute.snapshot.data["tarefa"];
    this.formGroup = this.formBuilder.group({
      id: [(this.tarefa && this.tarefa._id) ? this.tarefa._id : null],
      titulo: [(this.tarefa && this.tarefa.titulo) ? this.tarefa.titulo : null, Validators.required],
      descricao: [(this.tarefa && this.tarefa.descricao) ? this.tarefa.descricao: null],
      estado: [(this.tarefa && this.tarefa.estado) ? this.tarefa.estado : null]
    })
  }

  salvar(){
    if (this.tarefa && this.tarefa._id) {
      this.tarefaService.atualizarTarefa(this.formGroup.value).subscribe({
        next: (tarefaAtulizada) => {
          alert('Tarefa atualizada com sucesso!');
          this.formGroup.reset();
          this.router.navigateByUrl("");
        },
        error: (error) => {
          alert("Erro ao atualizar tarefa" + JSON.stringify(error));
        }
      });
    } else {
      this.tarefaService.cadastrarTarefa(this.formGroup.value).subscribe({
        next: (tarefaCadastrada) => {
          alert('Tarefa cadastrada com sucesso!');
          this.formGroup.reset();
          this.router.navigateByUrl("");
        },
        error: (error) => {
          alert("Erro ao cadastrar" + JSON.stringify(error));
        }
      });
    }

  }

}
