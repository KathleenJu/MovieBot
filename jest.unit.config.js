module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testEnvironment: "node",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 80,
            statements: 80
        }
    },
    coverageReporters: [
        "lcov"
    ],
    collectCoverageFrom: [
        "src/*.ts",
        "src/*.js"
    ],
    coveragePathIgnorePatterns: [
        "<rootDir>/unit_tests/",
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};