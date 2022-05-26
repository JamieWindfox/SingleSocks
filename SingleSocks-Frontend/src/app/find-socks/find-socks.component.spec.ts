import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSocksComponent } from './find-socks.component';

describe('FindSocksComponent', () => {
  let component: FindSocksComponent;
  let fixture: ComponentFixture<FindSocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindSocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
