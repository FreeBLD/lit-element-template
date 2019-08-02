import {LitElement, html, css} from 'lit-element';

export class MyComponentWithProperties extends LitElement {
    static get properties() {
        return {
            string: { type: String },
            number: { type: Number },
            array: { type: Array },
            object: { type: Object },
            boolean: { type: Boolean }
        }
    }
    
    constructor() {
        super();
        this.string = "string";
        this.number =  "2";
        this.boolean = false;
        this.array = [1, "array"];
        this.object = { property: "object", else: 3 };
    }


    render() {
        return html`
            <h1>${this.string} Works</h1>
            <h1>${this.number} Works</h1>
            <h1>${this.boolean} Works</h1>
            <h1>${this.array[1]} Works</h1>
            <h1>${this.object["object"]} Works</h1>
        `;
    }
}
customElements.define('my-component-with-properties', MyComponentWithProperties);