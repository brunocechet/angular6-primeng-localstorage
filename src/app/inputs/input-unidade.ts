import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'input-unidade',
    inputs: ['value'],
    template: `
        <div class="ui-inputgroup">
            <p-spinner [(ngModel)]="value" [min]="0"></p-spinner>
            <span class="ui-inputgroup-addon">un</span>
        </div>
    `
})
export class InputUnidade {
    value: Number;

    constructor(public app: AppComponent) {}
}
