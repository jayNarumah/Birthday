import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsers2Component } from './add-users2.component';

describe('AddUsers2Component', () => {
  let component: AddUsers2Component;
  let fixture: ComponentFixture<AddUsers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsers2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
