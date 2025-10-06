import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ParserService} from './services/parser.service';
import {DisplayService} from './services/display.service';
import {DisplayComponent} from './components/display/display.component';
import {ExampleButtonComponent} from './components/example-button/example-button.component';
import {ExampleFileComponent} from './components/example-file/example-file.component';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {FooterComponent} from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        DisplayComponent,
        ExampleButtonComponent,
        ExampleFileComponent,
        MatFormField,
        MatLabel,
        MatInput,
        CdkTextareaAutosize,
        ReactiveFormsModule,
        FooterComponent,
    ]
})
export class AppComponent {

    public textareaFc: FormControl;
    public buttonClickCount = signal(0);

    constructor(private _parserService: ParserService,
                private _displayService: DisplayService) {
        this.textareaFc = new FormControl();
        this.textareaFc.disable();
    }

    public processSourceChange(newSource: string) {
        this.textareaFc.setValue(newSource);

        const result = this._parserService.parse(newSource);
        if (result !== undefined) {
            this._displayService.display(result);
        }
    }

    public processButtonClick() {
        this.buttonClickCount.set(this.buttonClickCount() + 1);
    }
}
