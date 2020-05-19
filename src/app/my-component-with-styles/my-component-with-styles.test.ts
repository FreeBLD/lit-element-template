import { MyComponentWithStyles } from './my-component-with-styles';

const testing = new MyComponentWithStyles();

test('myComponentWithStyles should be loaded', () => {
    // How to unit test styles and the :host style pseudo-class?! This unit test will fail!
    const rendered = testing.render();
    expect(rendered).toEqual('red');
});