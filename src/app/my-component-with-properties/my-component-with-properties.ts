import {LitElement, html, property, customElement} from 'lit-element';

@customElement('my-component-with-properties')
export class MyComponentWithProperties extends LitElement {
    @property({ type: String }) public string = "string";
    @property({ type: Number }) public number = 2;
    @property({ type: Array })  private array = [1, "array"];
    @property({ type: Object })  public object = { property: "object", else: 3 };
    @property({ type: Boolean })  public bool = true;
    
    constructor() {
        super();
    }

    render() {
        return html`
            <h1>${this.string} Works</h1>
            <h1>${this.number} Works</h1>
            <h1>${this.bool} Works</h1>
            <h1>${this.array[1]} Works</h1>
            <h1>${this.object["property"]} Works</h1>
        `;
    }
}