import {Injectable} from '@angular/core';
import {Diagram} from '../classes/diagram/diagram';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    private static readonly OFFSET = 20;
    private static readonly RANGE = 300;

    public layout(diagram: Diagram): void {
        diagram.elements.forEach(el => {
            el.x = Math.floor(Math.random() * LayoutService.RANGE) + LayoutService.OFFSET;
            el.y = Math.floor(Math.random() * LayoutService.RANGE) + LayoutService.OFFSET;
        });
    }
}
