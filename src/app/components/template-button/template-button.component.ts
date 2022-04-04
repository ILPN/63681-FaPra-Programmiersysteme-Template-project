import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-template-button',
    templateUrl: './template-button.component.html',
    styleUrls: ['./template-button.component.scss']
})
export class TemplateButtonComponent {

    @Input() buttonText: string | undefined;
    @Input() buttonIcon: string | undefined;

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
        console.log(`Template button "${this.buttonText}" clicked`, e);
    }

}
