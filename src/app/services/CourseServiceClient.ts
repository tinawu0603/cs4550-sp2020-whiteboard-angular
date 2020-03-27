import { Injectable } from '@angular/core';
import { genericServer, nuid } from "./constants";

@Injectable()
export class CourseServiceClient {
    findAllCourses = () =>
        fetch(genericServer + '/api/' + nuid + '/courses')
            .then(response => response.json())

    findCourseById = (cid: string) =>
        fetch(genericServer + '/api/' + nuid + '/courses/' + cid)
            .then(response => response.json())

}