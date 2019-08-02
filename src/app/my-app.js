import { LitElement, html } from "lit-element";
import './my-component-with-styles/my-component-with-styles';

class MyApp extends LitElement {
    render() {
        return html`
            <h1>Hello World</h1>
            <my-component-with-styles string='string' number='5' array='[2, "array"]' object='{"object": "object"}'></my-component-with-styles>
        `;
    }
}

customElements.define("my-app", MyApp);