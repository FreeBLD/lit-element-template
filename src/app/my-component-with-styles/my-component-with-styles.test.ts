import { MyComponentWithStyles } from './my-component-with-styles';
import * as assert from 'assert';

let myComponentWithStyles: MyComponentWithStyles;
let shadow: ShadowRoot;

describe('MyComponentWithStyles Component', function() {
    beforeEach(() => {
        myComponentWithStyles = new MyComponentWithStyles();
        document.body.appendChild(myComponentWithStyles);
        shadow = myComponentWithStyles.shadowRoot;
    })

    afterEach(() => {
        document.body.removeChild(myComponentWithStyles);
        myComponentWithStyles = null;
    });

    it('should be loaded', function() {
        assert.ok(myComponentWithStyles);
    });

    it("has an h2 heading with the style property 'color' set to 'blue'", function(done) {
        // For some reason do be able to querySelector() the shadow root a setTimeout is needed otherwise it returns null
        const blue = 'rgb(0, 0, 255)';
        setTimeout(() => {
            const h1 = shadow.querySelector('h1');
            const color = getComputedStyle(h1).getPropertyValue('color');
            assert.equal(color, blue);
            done();
        }, 0);
    });

    it("MyComponentwithStyles has a style attribute 'display' with value of 'inline'", function() {
        const testComponent = document.createElement('my-component-with-styles');
        document.body.appendChild(testComponent);
        //const display = window.getComputedStyle(document.querySelector('my-component-with-styles'), ':host');
        const display = window.getComputedStyle(testComponent, ':host');
        assert.equal(display.getPropertyValue('display'), 'inline');
    });

    it("MyComponentWithStyles has a style attribute 'color' with value of 'red'", function() {
        // When declaring any css property colour by name, it will be computed and stored in the rgb(0,0,0) format
        const red = 'rgb(255, 0, 0)';
        // Element must me attached to the DOM to have a valid style object assigned. Otherwise the class is style uninitialized
        document.body.appendChild(myComponentWithStyles);
        const color1 = window.getComputedStyle(myComponentWithStyles, ':host');
        //The pseudo-element :host is not necessary. The element itself is already understood to be the host.
        assert.equal(color1.getPropertyValue('color'), red);
    });
});