import { type JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        "@/(.*)": "<rootDir>/$1"
    },
    testMatch: [
        '**/test/**/*.test.ts',
    ],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], //
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'], // Diz ao Jest para tratar esses arquivos como ES Modules
    transformIgnorePatterns: ['/node_modules/', '/dist/'], // Ignorar dist e node_modules
    verbose: true,
    silent: false
};

export default jestConfig