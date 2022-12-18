import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoftSillOrderComponent } from './edit-soft-sill-order.component';

describe('EditSoftSillOrderComponent', () => {
  let component: EditSoftSillOrderComponent;
  let fixture: ComponentFixture<EditSoftSillOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSoftSillOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSoftSillOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
