/// <reference types="jest" />

import  { MyComponentWithProperties } from "./my-component-with-properties";

let myComponentWithProperties: MyComponentWithProperties;

describe("Test Case for the MyComponentWithProperties Class", () => {
    beforeEach(() => {
        myComponentWithProperties = new MyComponentWithProperties();
    })

    afterEach(() => {
        myComponentWithProperties = null;
    });

    test("MyComponentwithProperties has a property 'string' with value of 'string'", () => {
        expect(myComponentWithProperties.string).toBe('string');
    });

})