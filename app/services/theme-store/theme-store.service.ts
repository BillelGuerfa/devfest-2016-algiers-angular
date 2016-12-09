import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

const THEMES_URL= "./app/data/themes.json";

export interface ITheme {
    id: string;
    name: string;
    description: string;
    logo: string;
}
@Injectable()
export class ThemeStoreService {
    
    constructor(private http: Http) { }

    getThemes(): Observable<ITheme[]>{
      return  this.http.get(THEMES_URL)
                .map((res: Response) => {
                    let body = res.json();
                    return body.data || {};
                })
                .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
  }
}