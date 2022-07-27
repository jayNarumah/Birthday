import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTodaysBirthdayComponent } from './list-of-todays-birthday.component';

describe('ListOfTodaysBirthdayComponent', () => {
  let component: ListOfTodaysBirthdayComponent;
  let fixture: ComponentFixture<ListOfTodaysBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTodaysBirthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTodaysBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
