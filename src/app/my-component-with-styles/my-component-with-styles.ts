import {LitElement, html, css, customElement} from 'lit-element';

@customElement('my-component-with-styles')
export class MyComponentWithStyles extends LitElement {
    static get styles() {
        const style = css`
            :host {
                color: red;
                display: inline;
            }
        `;
        const style2 = css`
            h2 {
                display: block;
            }
        `;
        return [style, style2];
    }

    constructor() {
        super();
    }


    render() {
        return html`
                    <h1>Hello </h1>
                    <h2> World!</h2>
        `;
    }
}