import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoAddUpdateComponent } from './customer-info-add-update.component';

describe('CustomerInfoAddUpdateComponent', () => {
  let component: CustomerInfoAddUpdateComponent;
  let fixture: ComponentFixture<CustomerInfoAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
