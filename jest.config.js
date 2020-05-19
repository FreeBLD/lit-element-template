module.exports = {
    transformIgnorePatterns: [
        "node_modules/(?!(lit-.*)/)"
    ],
    //testResultsProcessor: "<rootDir>/node_modules/ts-jest/coverageprocessor.js",
    transform: {
      ".(ts|tsx)": "ts-jest"
    }
}