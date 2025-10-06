import {Component, computed, input, signal} from '@angular/core';
import {DiagramNode} from "../../../classes/diagram/diagram-node";
import {Coords} from "../../../classes/json-petri-net";

@Component({
  selector: 'g[SvgNode]',
  imports: [],
  templateUrl: './svg-node.component.html',
  styleUrl: './svg-node.component.css'
})
export class SvgNodeComponent {

    readonly RADIUS = 25;
    readonly VERTICES = 5;
    readonly CLICK_ROTATION_STEP = 2*Math.PI/20;

    readonly diagramNode = input<DiagramNode>();

    private readonly _rotation = signal(0);
    readonly points = computed(() => {
        const pointList = this.computePoints(this._rotation());
        return this.serialisePoints(pointList);
    });
    readonly fillColor = signal('black');

    private computePoints(rotation: number): Array<Coords> {
        const node = this.diagramNode();
        if (!node) {
            return [];
        }

        const pts: Array<Coords> = [];
        const radStep = 2*Math.PI/this.VERTICES;
        for(let i = 0; i < this.VERTICES; i++) {
            pts.push({
                x: node.x + Math.sin(rotation + i*radStep)*this.RADIUS,
                y: node.y - Math.cos(rotation + i*radStep)*this.RADIUS
            })
        }
        return pts;
    }

    private serialisePoints(points: Array<Coords>): string {
        return points.map(pt => `${pt.x},${pt.y}`).join(' ');
    }

    public mouseDown(e: MouseEvent) {
        this._rotation.set(this._rotation() + this.CLICK_ROTATION_STEP);
        this.fillColor.set('red');
    }

    public mouseUp(e: MouseEvent) {
        this.fillColor.set('black');
    }
}
