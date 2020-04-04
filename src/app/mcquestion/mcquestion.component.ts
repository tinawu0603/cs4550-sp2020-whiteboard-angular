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
  faCheck = faCheck
  faTimes = faTimes

  grade = () => { this.grading = true; }

  ngOnInit(): void {
  }

}
