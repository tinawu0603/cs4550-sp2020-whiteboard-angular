import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFQuestionComponent } from './tfquestion.component';

describe('TFQuestionComponent', () => {
  let component: TFQuestionComponent;
  let fixture: ComponentFixture<TFQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
