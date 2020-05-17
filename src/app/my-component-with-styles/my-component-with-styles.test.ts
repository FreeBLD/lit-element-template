import { MyComponentWithStyles } from './my-component-with-styles';

const testing = new MyComponentWithStyles();

test('myComponentWithStyles should be loaded', () => {
    expect(testing).toBe(true);
});