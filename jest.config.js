module.exports = {
  preset: "jest-preset-angular",
  moduleDirectories: ["node_modules", 'src'],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  globalSetup: "jest-preset-angular/global-setup",
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular"
  },
  transformIgnorePatterns: ["node_modules/(?!@angular|@ngrx|uuid)"],
  moduleNameMapper: {
    "@layout/(.*)": "<rootDir>/src/app/layout/$1",
    "@core/(.*)": "<rootDir>/src/app/core/$1",
    "@features/(.*)": "<rootDir>/src/app/features/$1",
    "@environments/(.*)": "<rootDir>/src/environments/$1",
    "@shared/interfaces": "<rootDir>/src/app/shared/interfaces",
    "@shared/constants": "<rootDir>/src/app/shared/constants",
    "@shared/enums": "<rootDir>/src/app/shared/enums",
    "@shared/modules": "<rootDir>/src/app/shared/modules",
    "@shared/models": "<rootDir>/src/app/shared/models",
    "@shared/directives": "<rootDir>/src/app/shared/directives",
    "@shared/tests": "<rootDir>/src/app/shared/tests",
    "@shared/services": "<rootDir>/src/app/shared/services"
  },
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/app/**/*.ts'],
  coveragePathIgnorePatterns: ['module.ts'],
  coverageReporters: ['lcov'],
  reporters: ['default', 'jest-junit'],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
};
