import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'theme-card',
    templateUrl: '../../../../app/components/theme-card/theme-card.component.html'
})
export class ThemeCardComponent implements OnInit {
    @Input() theme = {
        name: '',
        description: '',
        logo: ''
    };

    constructor() { }

    ngOnInit() { }
}