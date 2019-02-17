import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaCrudComponent } from './caixa-crud.component';

describe('CaixaCrudComponent', () => {
  let component: CaixaCrudComponent;
  let fixture: ComponentFixture<CaixaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
