import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallLayoutComponent } from './overall-layout.component';

describe('OverallLayoutComponent', () => {
  let component: OverallLayoutComponent;
  let fixture: ComponentFixture<OverallLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
