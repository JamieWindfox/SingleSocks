import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSocksComponent } from './create-socks.component';

describe('CreateSocksComponent', () => {
  let component: CreateSocksComponent;
  let fixture: ComponentFixture<CreateSocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
