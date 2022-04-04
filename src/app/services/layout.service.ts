import {Injectable} from '@angular/core';
import {Diagram} from '../classes/diagram/diagram';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    private static readonly OFFSET = 10;
    private static readonly RANGE = 100;

    public layout(diagram: Diagram): void {
        diagram.elements.forEach(el => {
            el.x = Math.floor(Math.random() * LayoutService.RANGE) + LayoutService.OFFSET;
        });
    }
}
