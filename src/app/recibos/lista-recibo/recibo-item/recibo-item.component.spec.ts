import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboItemComponent } from './recibo-item.component';

describe('ReciboItemComponent', () => {
  let component: ReciboItemComponent;
  let fixture: ComponentFixture<ReciboItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciboItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
