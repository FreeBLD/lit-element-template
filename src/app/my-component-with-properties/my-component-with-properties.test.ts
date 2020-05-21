import  { MyComponentWithProperties } from './my-component-with-properties';
import * as assert from 'assert';

let myComponentWithProperties: MyComponentWithProperties;

describe("Test Case for the MyComponentWithProperties Class", () => {
    beforeEach(() => {
        myComponentWithProperties = new MyComponentWithProperties();
    })

    afterEach(() => {
        myComponentWithProperties = null;
    });

    it("MyComponentwithProperties has a property 'string' with value of 'string'", () => {
        assert.equal(myComponentWithProperties.string, 'string');
    });

})