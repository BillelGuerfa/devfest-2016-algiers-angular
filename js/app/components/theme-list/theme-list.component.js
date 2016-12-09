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
var theme_store_service_1 = require('../../services/theme-store/theme-store.service');
var ThemeListComponent = (function () {
    function ThemeListComponent(themeStoreService) {
        this.themeStoreService = themeStoreService;
        this.themes = [];
    }
    ThemeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeStoreService.getThemes().subscribe(function (themes) {
            (_a = _this.themes).push.apply(_a, themes);
            var _a;
        });
    };
    ThemeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'theme-list',
            templateUrl: '../../../../app/components/theme-list/theme-list.component.html'
        }), 
        __metadata('design:paramtypes', [theme_store_service_1.ThemeStoreService])
    ], ThemeListComponent);
    return ThemeListComponent;
}());
exports.ThemeListComponent = ThemeListComponent;
//# sourceMappingURL=theme-list.component.js.map