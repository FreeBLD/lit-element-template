import {LitElement, html, css, customElement} from 'lit-element';

@customElement('my-component-with-styles')
export class MyComponentWithStyles extends LitElement {
    /*
    static get styles() {
        const style = css`
            :host {
                color: red;
                display: inline;
            }
        `;
        const style2 = css`
            h1 {
                display: inline;
            }
        `;
        const style3 = css`
            h2 {
                display: inline;
            }
        `;
        return [style, style2, style3];
    }
    */

    constructor() {
        super();
    }


    render() {
        return html`
                    <style>
                        :host {
                            color: red;
                            display: inline;
                        }
                    </style>
                    <h1>Hello </h1>
                    <h2> World!</h2>
        `;
    }
}