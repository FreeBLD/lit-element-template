import { MyComponentWithStyles } from './my-component-with-styles';
import { render } from 'lit-html';
import * as assert from 'assert';

const testing = new MyComponentWithStyles();

describe('MyComponentWithStyles Component', function() {
    it('should be loaded', function() {
        // How to unit test styles and the :host style pseudo-class?! This unit test will fail!
        const testComponent = document.createElement('my-component-with-styles');
        console.log(testComponent);
        document.body.appendChild(testComponent);
        const styles = document.getElementsByName('my-component-with-styles');
        console.log(styles[0]);
        const color1 = window.getComputedStyle(document.querySelector('my-component-with-styles'), ':host');
        const color = window.getComputedStyle(testing, 'h1');
        console.log(color);
        console.log(color1);
        render(testing.render(), document.body);
        console.log(document.body);
        assert.equal(color1.getPropertyValue('color'), 'red');
        //expect(color1.getPropertyValue('display')).toEqual('inline');
        assert.equal(color.getPropertyValue('display'), 'inline');
    });
})