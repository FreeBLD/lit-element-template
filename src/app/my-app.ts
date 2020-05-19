import { LitElement, html, customElement } from "lit-element";
import './my-component-with-styles/my-component-with-styles';
import './my-component-with-properties/my-component-with-properties';

@customElement("my-app")
class MyApp extends LitElement {
    render() {
        return html`
            <h1>Hello World</h1>
            <my-component-with-properties string='string' number='7' array='[2, "array"]' object='{"object": "object"}'></my-component-with-properties>
            <my-component-with-styles></my-component-with-styles>
        `;
    }
}