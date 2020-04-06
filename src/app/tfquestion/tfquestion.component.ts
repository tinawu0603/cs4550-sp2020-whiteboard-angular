import { Component, OnInit, Input } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tfquestion',
  templateUrl: './tfquestion.component.html',
  styleUrls: ['./tfquestion.component.css']
})
export class TFQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = { _id: '', title: '', question: '', answer: '', correct: '' }
  grading = false
  faCheck = faCheck
  faTimes = faTimes
  answer = null;
  correct

  grade = () => {
    if (this.answer === null) {
      return false;
    }
    this.grading = true;
    if (this.answer === this.question.correct) {
      this.correct = true;
    }
  }

  ngOnInit(): void {
  }

}
