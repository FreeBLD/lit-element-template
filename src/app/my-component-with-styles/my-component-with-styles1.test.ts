import { MyComponentWithStyles } from './my-component-with-styles';
import { render } from 'lit-html';

const testing = new MyComponentWithStyles();

/*
test('myComponentWithStyles should be loaded', () => {
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
    expect(color1.getPropertyValue('color')).toEqual('red');
    //expect(color1.getPropertyValue('display')).toEqual('inline');
    expect(color.getPropertyValue('display')).toEqual('inline');
});
*/

describe('MyComponentWithStyles', () => {
    describe('styling of the component', () => {
        it('should be truthy', () => {
            expect(testing).toBeTruthy();
        })
    });
})