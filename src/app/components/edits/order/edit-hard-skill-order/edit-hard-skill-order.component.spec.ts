import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHardSkillOrderComponent } from './edit-hard-skill-order.component';

describe('EditHardSkillOrderComponent', () => {
  let component: EditHardSkillOrderComponent;
  let fixture: ComponentFixture<EditHardSkillOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHardSkillOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHardSkillOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
