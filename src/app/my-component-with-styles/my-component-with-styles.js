import {LitElement, html, css} from 'lit-element';

export class MyComponentWithStyles extends LitElement {
    static get styles() {
        const style = css`
            :host {
                color: red;
            }
        `;
        const style2 = css`
            :host {
                display: inline;
            }
        `;
        return [style, style2];
    }

    constructor() {
        super();
    }


    render() {
        return html`<h1>Hello World</h1>`;
    }
}
customElements.define('my-component-with-styles', MyComponentWithStyles);