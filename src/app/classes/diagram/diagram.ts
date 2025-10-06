import {DiagramNode} from './diagram-node';

export class Diagram {
    private readonly _nodes: Array<DiagramNode>;

    constructor(elements: Array<DiagramNode>) {
        this._nodes = elements;
    }

    get nodes(): Array<DiagramNode> {
        return this._nodes;
    }
}
