import { Component, OnInit, Input } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mcquestion',
  templateUrl: './mcquestion.component.html',
  styleUrls: ['./mcquestion.component.css']
})
export class MCQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = { _id: '', title: '', question: '', choices: [], answer: '', correct: '' }
  grading = false
  answer = null
  faCheck = faCheck
  faTimes = faTimes
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
