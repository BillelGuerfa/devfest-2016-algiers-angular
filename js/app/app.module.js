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
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var intro_component_1 = require('./components/intro/intro.component');
var theme_card_component_1 = require('./components/theme-card/theme-card.component');
var theme_list_component_1 = require('./components/theme-list/theme-list.component');
var home_component_1 = require('./components/home/home.component');
var question_card_component_1 = require('./components/question-card/question-card.component');
var question_list_component_1 = require('./components/question-list/question-list.component');
var theme_store_service_1 = require('./services/theme-store/theme-store.service');
var question_store_service_1 = require('./services/question-store/question-store.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
                material_1.MaterialModule.forRoot(),
                http_1.HttpModule,
                http_1.JsonpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: home_component_1.HomeComponent
                    },
                    {
                        path: 'questions',
                        component: question_list_component_1.QuestionListComponent
                    }
                ])],
            declarations: [app_component_1.AppComponent, intro_component_1.IntroComponent, theme_card_component_1.ThemeCardComponent, home_component_1.HomeComponent, theme_list_component_1.ThemeListComponent,
                question_card_component_1.QuestionCardComponent,
                question_list_component_1.QuestionListComponent],
            providers: [theme_store_service_1.ThemeStoreService, question_store_service_1.QuestionStoreService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map