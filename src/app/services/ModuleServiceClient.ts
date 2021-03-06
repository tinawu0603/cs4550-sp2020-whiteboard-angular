import { Injectable } from '@angular/core';
import { genericServer, nuid } from "./constants";

@Injectable()
export class ModuleServiceClient {
    findModulesForCourse = (cid: string) =>
        fetch(genericServer + '/api/' + nuid + '/courses/' + cid + '/modules')
            .then(response => response.json())

}