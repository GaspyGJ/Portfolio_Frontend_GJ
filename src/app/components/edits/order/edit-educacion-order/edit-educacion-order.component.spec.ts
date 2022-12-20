import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducacionOrderComponent } from './edit-educacion-order.component';

describe('EditEducacionOrderComponent', () => {
  let component: EditEducacionOrderComponent;
  let fixture: ComponentFixture<EditEducacionOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducacionOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducacionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
