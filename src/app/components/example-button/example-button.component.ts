import {Component, input, output} from '@angular/core';

@Component({
    selector: 'app-example-button',
    templateUrl: './example-button.component.html',
    styleUrls: ['./example-button.component.css']
})
export class ExampleButtonComponent {

    public static readonly META_DATA_CODE = 'drag-file-location';

    readonly title = input<string>();
    readonly buttonPressed = output();

    constructor() {
    }

    prevent(e: Event) {
        e.preventDefault();
        e.stopPropagation();
    }

    hoverStart(e: MouseEvent) {
        this.prevent(e);
        const target = (e.target as HTMLElement);
        target.classList.add('mouse-hover');
    }

    hoverEnd(e: MouseEvent) {
        this.prevent(e);
        const target = (e.target as HTMLElement);
        target.classList.remove('mouse-hover');
    }

    processMouseClick(e: MouseEvent) {
        this.buttonPressed.emit();
    }

}
