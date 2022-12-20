import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExperienciaOrderComponent } from './edit-experiencia-order.component';

describe('EditExperienciaOrderComponent', () => {
  let component: EditExperienciaOrderComponent;
  let fixture: ComponentFixture<EditExperienciaOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExperienciaOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExperienciaOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
