import { Component, OnInit } from '@angular/core';
import {ThemeStoreService, ITheme} from '../../services/theme-store/theme-store.service';
@Component({
    moduleId: module.id,
    selector: 'theme-list',
    templateUrl: '../../../../app/components/theme-list/theme-list.component.html'
})
export class ThemeListComponent implements OnInit {
    themes: ITheme[] = [];
    constructor(private themeStoreService: ThemeStoreService) {

     }

    ngOnInit() { 
        this.themeStoreService.getThemes().subscribe((themes: ITheme[]) => {
            this.themes.push(...themes);
        });
    }
}