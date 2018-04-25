import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizz1homeComponent } from './quizz1home.component';

describe('Quizz1homeComponent', () => {
  let component: Quizz1homeComponent;
  let fixture: ComponentFixture<Quizz1homeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizz1homeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizz1homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
