import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoMainComponent } from './customer-info-main.component';

describe('CustomerInfoMainComponent', () => {
  let component: CustomerInfoMainComponent;
  let fixture: ComponentFixture<CustomerInfoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
