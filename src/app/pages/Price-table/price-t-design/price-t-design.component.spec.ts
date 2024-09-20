import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTDesignComponent } from './price-t-design.component';

describe('PriceTDesignComponent', () => {
  let component: PriceTDesignComponent;
  let fixture: ComponentFixture<PriceTDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceTDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceTDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
