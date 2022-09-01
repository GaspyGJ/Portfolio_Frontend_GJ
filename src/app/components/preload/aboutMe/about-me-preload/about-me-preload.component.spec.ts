import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePreloadComponent } from './about-me-preload.component';

describe('AboutMePreloadComponent', () => {
  let component: AboutMePreloadComponent;
  let fixture: ComponentFixture<AboutMePreloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMePreloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMePreloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
