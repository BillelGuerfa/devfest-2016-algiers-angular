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
var question_store_service_1 = require('../../services/question-store/question-store.service');
var QuestionListComponent = (function () {
    function QuestionListComponent(questionStoreService) {
        this.questionStoreService = questionStoreService;
        this.questions = [];
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionStoreService.getQuestions().subscribe(function (questions) {
            questions.forEach(function (question) {
                _this.questions.push(new question_store_service_1.Question(question));
            });
        });
    };
    QuestionListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'question-list',
            templateUrl: '../../../../app/components/question-list/question-list.component.html'
        }), 
        __metadata('design:paramtypes', [question_store_service_1.QuestionStoreService])
    ], QuestionListComponent);
    return QuestionListComponent;
}());
exports.QuestionListComponent = QuestionListComponent;
//# sourceMappingURL=question-list.component.js.map