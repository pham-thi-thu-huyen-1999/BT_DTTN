import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLaptopComponent } from './detail-laptop.component';

describe('DetailLaptopComponent', () => {
  let component: DetailLaptopComponent;
  let fixture: ComponentFixture<DetailLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
