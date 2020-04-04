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

  grade = () => { this.grading = true; }

  ngOnInit(): void {
  }

}
