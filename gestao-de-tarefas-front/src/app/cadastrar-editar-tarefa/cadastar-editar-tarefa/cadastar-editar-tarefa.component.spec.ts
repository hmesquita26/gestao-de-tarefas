import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarEditarTarefaComponent } from './cadastar-editar-tarefa.component';

describe('CadastarEditarTarefaComponent', () => {
  let component: CadastarEditarTarefaComponent;
  let fixture: ComponentFixture<CadastarEditarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastarEditarTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastarEditarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
