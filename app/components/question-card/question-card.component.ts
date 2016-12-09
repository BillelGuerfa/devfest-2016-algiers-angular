import { Component, OnInit, Input } from '@angular/core';
import {IChoice,IQuestion, Question, Choice} from '../../services/question-store/question-store.service';
@Component({
    moduleId: module.id,
    selector: 'question-card',
    templateUrl: '../../../../app/components/question-card/question-card.component.html'
})
export class QuestionCardComponent implements OnInit {
    @Input() preview = false;
    @Input() question: IQuestion;
    constructor() { }
    
    ngOnInit() { 
    }

    checkChoices(){
        this.preview = true;
    }
}