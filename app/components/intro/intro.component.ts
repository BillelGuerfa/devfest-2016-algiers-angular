import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'intro',
    templateUrl: '../../../../app/components/intro/intro.component.html'
})
export class IntroComponent implements OnInit {
    name = '';
    constructor() { }

    ngOnInit() { }
}