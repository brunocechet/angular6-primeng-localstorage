import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'input-litro',
    inputs: ['value'],
    template: `
        <div class="ui-inputgroup">
            <p-inputMask mask="999,999" [(ngModel)]="value"></p-inputMask>
            <span class="ui-inputgroup-addon">lt</span>
        </div>
    `
})
export class InputLitro {
    value: Number;

    constructor(public app: AppComponent) {}
}
