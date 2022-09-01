import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPreloadComponent } from './main-preload.component';

describe('MainPreloadComponent', () => {
  let component: MainPreloadComponent;
  let fixture: ComponentFixture<MainPreloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPreloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPreloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
