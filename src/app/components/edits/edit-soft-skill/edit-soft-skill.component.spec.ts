import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoftSkillComponent } from './edit-soft-skill.component';

describe('EditSoftSkillComponent', () => {
  let component: EditSoftSkillComponent;
  let fixture: ComponentFixture<EditSoftSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSoftSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSoftSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
