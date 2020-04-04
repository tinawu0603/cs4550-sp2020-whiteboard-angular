import { Injectable } from '@angular/core';
import { localhost } from "./constants";

@Injectable()
export class QuestionServiceClient {
    findQuestionsForQuiz = (qid) =>
        fetch(localhost + '/api/quizzes/' + qid + '/questions')
            .then(response => response.json())

}