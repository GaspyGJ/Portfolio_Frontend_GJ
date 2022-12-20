import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProyectosOrderComponent } from './edit-proyectos-order.component';

describe('EditProyectosOrderComponent', () => {
  let component: EditProyectosOrderComponent;
  let fixture: ComponentFixture<EditProyectosOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProyectosOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProyectosOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
