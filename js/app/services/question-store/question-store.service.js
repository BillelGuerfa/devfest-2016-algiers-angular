"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var QUESTIONS_URL = "./app/data/questions.json";
var Choice = (function () {
    function Choice(choice) {
        if (choice) {
            this.id = choice.id;
            this.label = choice.label;
            this.correct = choice.correct;
            this.checked = choice.checked || false;
        }
    }
    Choice.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    ;
    Choice.prototype.isCorrect = function () {
        return (this.correct && this.checked) || (!this.correct && !this.checked);
    };
    ;
    return Choice;
}());
exports.Choice = Choice;
var Question = (function () {
    function Question(question) {
        if (question) {
            this.id = question.id;
            this.title = question.title;
            this.description = question.description;
            this.choices = question.choices.map(function (choice) { return new Choice(choice); });
        }
    }
    Question.prototype.isCorrect = function () {
        return !(this.choices.filter(function (choice) { return choice.checked; })
            .filter(function (choice) { return !choice.isCorrect(); }).length > 0);
    };
    ;
    return Question;
}());
exports.Question = Question;
var QuestionStoreService = (function () {
    function QuestionStoreService(http) {
        this.http = http;
    }
    QuestionStoreService.prototype.getQuestions = function () {
        return this.http.get(QUESTIONS_URL)
            .map(function (res) {
            var body = res.json();
            return body.data || {};
        })
            .catch(this.handleError);
    };
    QuestionStoreService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    QuestionStoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionStoreService);
    return QuestionStoreService;
}());
exports.QuestionStoreService = QuestionStoreService;
//# sourceMappingURL=question-store.service.js.map