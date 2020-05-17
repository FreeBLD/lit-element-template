const myComponentWithStyles = require('./my-component-with-styles');

const testing = new myComponentWithStyles();

test('myComponentWithStyles should be loaded', () => {
    expect(testing).toBe(true);
});