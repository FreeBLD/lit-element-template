import { LitElement, html, css } from "lit-element";

class MyApp extends LitElement {
    render() {
        return html`
        <style>
            :host {
                color: red;
                display: inline;
            }
        </style>
        <h1>Hello World</h1>
        `;
    }
}

customElements.define("my-app", MyApp);