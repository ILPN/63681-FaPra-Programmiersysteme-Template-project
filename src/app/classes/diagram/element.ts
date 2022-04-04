export class Element {
    private _x: number;
    private _y: number;
    private _svgElement: SVGElement | undefined;

    constructor() {
        this._x = 0;
        this._y = 0;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    public registerSvg(svg: SVGElement) {
        this._svgElement = svg;
        this._svgElement.onmousedown = (event) => {
            this.processMouseDown(event);
        };
        this._svgElement.onmouseup = (event) => {
            this.processMouseUp(event);
        };
    }

    private processMouseDown(event: MouseEvent) {
        //this._svgElement.
    }

    private processMouseUp(event: MouseEvent) {

    }

}
