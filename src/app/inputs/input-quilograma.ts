import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'input-quilograma',
    inputs: ['value'],
    template: `
        <div class="ui-inputgroup">
            <p-inputMask mask="999,999" [(ngModel)]="value"></p-inputMask>
            <span class="ui-inputgroup-addon">kg</span>
        </div>
    `
})
export class InputQuilograma {
    value: Number;

    constructor(public app: AppComponent) {}
}
