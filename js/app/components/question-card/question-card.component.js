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
var QuestionCardComponent = (function () {
    function QuestionCardComponent() {
        this.preview = false;
    }
    QuestionCardComponent.prototype.ngOnInit = function () {
    };
    QuestionCardComponent.prototype.checkChoices = function () {
        this.preview = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], QuestionCardComponent.prototype, "preview", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], QuestionCardComponent.prototype, "question", void 0);
    QuestionCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'question-card',
            templateUrl: '../../../../app/components/question-card/question-card.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionCardComponent);
    return QuestionCardComponent;
}());
exports.QuestionCardComponent = QuestionCardComponent;
//# sourceMappingURL=question-card.component.js.map