import { TestBed } from '@angular/core/testing';

import { CaixaService } from './caixa.service';

describe('CaixaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaixaService = TestBed.get(CaixaService);
    expect(service).toBeTruthy();
  });
});
