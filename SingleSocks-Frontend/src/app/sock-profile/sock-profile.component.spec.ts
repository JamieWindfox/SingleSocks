import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SockProfileComponent } from './sock-profile.component';

describe('SockProfileComponent', () => {
  let component: SockProfileComponent;
  let fixture: ComponentFixture<SockProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SockProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SockProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
