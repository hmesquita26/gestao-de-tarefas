import { TestBed } from '@angular/core/testing';

import { TarefaResolverService } from './tarefa-resolver.service';

describe('TarefaResolverService', () => {
  let service: TarefaResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
