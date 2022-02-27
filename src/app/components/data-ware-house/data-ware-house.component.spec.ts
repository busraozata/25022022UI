import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWareHouseComponent } from './data-ware-house.component';

describe('DataWareHouseComponent', () => {
  let component: DataWareHouseComponent;
  let fixture: ComponentFixture<DataWareHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataWareHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWareHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
