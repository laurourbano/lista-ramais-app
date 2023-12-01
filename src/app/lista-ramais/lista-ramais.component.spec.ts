import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRamaisComponent } from './lista-ramais.component';

describe('ListaRamaisComponent', () => {
  let component: ListaRamaisComponent;
  let fixture: ComponentFixture<ListaRamaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRamaisComponent]
    });
    fixture = TestBed.createComponent(ListaRamaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
