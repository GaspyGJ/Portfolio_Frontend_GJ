import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHardSkillComponent } from './edit-hard-skill.component';

describe('EditHardSkillComponent', () => {
  let component: EditHardSkillComponent;
  let fixture: ComponentFixture<EditHardSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHardSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHardSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
