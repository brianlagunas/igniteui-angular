import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { IgxRadioGroupDirective } from 'igniteui-angular';

class Person {
    name: string;
    favoriteSeason: string;
}

@Component({
    selector: 'app-radio-sample',
    styleUrls: ['radio.sample.css'],
    templateUrl: 'radio.sample.html'
})
export class RadioSampleComponent implements AfterContentInit {
    @ViewChild('radioGroupZZ', { read: IgxRadioGroupDirective }) public radioGroup: IgxRadioGroupDirective;

    selectedValue: any;

    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];

    personBob: Person = { name: 'Bob', favoriteSeason: 'Summer' };

    get diagnostic() {
        return JSON.stringify(this.personBob);
    }

    ngAfterContentInit(): void {
        setTimeout(() => this.selectedValue = this.radioGroup.value);
    }

    onBtnClick(evt) {
        this.radioGroup.value = 'Baz';
    }

    onRadioChange(evt) {
        this.selectedValue = evt.value;
    }

    onSubmit() {
        this.personBob.favoriteSeason = 'Spring';
    }
}
