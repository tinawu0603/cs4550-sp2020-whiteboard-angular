import { Injectable } from '@angular/core';
import { genericServer, nuid } from "./constants";

@Injectable()
export class LessonServiceClient {
    findLessonsForModule = (mid: string) =>
        fetch(genericServer + '/api/' + nuid + '/modules/' + mid + '/lessons')
            .then(response => response.json())

}