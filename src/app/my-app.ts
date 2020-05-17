import { LitElement, html } from "lit-element";
import './my-component-with-styles/my-component-with-styles';

class MyApp extends LitElement {
    render() {
        return html`
            <h1>Hello World</h1>
            <my-component-with-properties string='string' number='5' array='[2, "array"]' object='{"object": "object"}'></my-component-with-properties>
        `;
    }
}

customElements.define("my-app", MyApp);