import {Element} from './element';

export class Diagram {
    private readonly _elements: Array<Element>;

    constructor() {
        this._elements = [];
    }

    get elements(): Array<Element> {
        return this._elements;
    }

    public addElement(element: Element): void {
        this._elements.push(element);
    }
}
