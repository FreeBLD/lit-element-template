import {LitElement, html, css, customElement} from 'lit-element';

@customElement('my-component-with-styles')
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