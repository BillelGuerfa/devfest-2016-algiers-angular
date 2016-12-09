import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

const QUESTIONS_URL= "./app/data/questions.json";

export interface IChoice {
    id:number;
    label: string;
    correct: boolean;
	checked?: boolean;
    toggle(): void;
	isCorrect(): boolean;
}
export interface IQuestion {
    id: number;
    title: string;
    description: string;
    choices: IChoice[];
    isCorrect(): boolean;
}
export class Choice implements IChoice{
    id:number;
    label: string;
    correct: boolean;
	checked?: boolean;
    constructor(choice: IChoice){
        if(choice) {
			this.id = choice.id;
			this.label = choice.label;
			this.correct = choice.correct;
			this.checked = choice.checked || false;
		}
    }
    toggle(): void {
        this.checked = !this.checked;
    };
	isCorrect(): boolean {
        return (this.correct && this.checked) || (!this.correct && !this.checked);
    };
}
export class Question implements IQuestion{
    id: number;
    title: string;
    description: string;
    choices: IChoice[];
    constructor(question: IQuestion){
        if(question) {
			this.id = question.id;
			this.title = question.title;
			this.description = question.description;
			this.choices = question.choices.map( (choice: IChoice) => new Choice(choice) );
		}
    }
    isCorrect(): boolean {
        return !(this.choices.filter((choice: IChoice) => choice.checked)
                    .filter((choice: IChoice) => !choice.isCorrect()).length > 0);
    };
}
@Injectable()
export class QuestionStoreService {
    
    constructor(private http: Http) { }

    getQuestions(): Observable<IQuestion[]>{
      return  this.http.get(QUESTIONS_URL)
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