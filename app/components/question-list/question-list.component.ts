import { Component, OnInit } from '@angular/core';
import {QuestionStoreService, IChoice,IQuestion, Question, Choice} from '../../services/question-store/question-store.service';

@Component({
    moduleId: module.id,
    selector: 'question-list',
    templateUrl: '../../../../app/components/question-list/question-list.component.html'
})
export class QuestionListComponent implements OnInit {
    questions: IQuestion[] = [];
    constructor(private questionStoreService: QuestionStoreService) { }

    ngOnInit() { 
         this.questionStoreService.getQuestions().subscribe(questions => {
             questions.forEach(question => {
                 this.questions.push(new Question(question))
             });
             
        });
    }
}