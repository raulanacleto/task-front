import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaConsultaComponent } from './tarefa-consulta.component';

describe('TarefaConsultaComponent', () => {
  let component: TarefaConsultaComponent;
  let fixture: ComponentFixture<TarefaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
