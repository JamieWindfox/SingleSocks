import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyCornerComponent } from './diy-corner.component';

describe('DiyCornerComponent', () => {
  let component: DiyCornerComponent;
  let fixture: ComponentFixture<DiyCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiyCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
