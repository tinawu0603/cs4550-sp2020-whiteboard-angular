import { Injectable } from '@angular/core';
import { localhost, nuid } from "./constants";

@Injectable()
export class QuizServiceClient {
    findAllQuizzes = () =>
        fetch(localhost + '/api/quizzes')
            .then(response => response.json())

    findQuizById = (qid) =>
        fetch(localhost + '/api/quizzes/' + qid)
            .then(response => response.json())

}