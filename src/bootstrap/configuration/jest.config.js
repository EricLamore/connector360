module.exports = {
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/src/bootstrap/configuration/setupJest.ts'],
	collectCoverageFrom: [
		'<rootDir>/src/app/**/*.layout.ts',
		'<rootDir>/src/app/**/*.component.ts',
		'<rootDir>/src/app/**/*.service.ts',
		'<rootDir>/src/features/**/*.pages.ts',
		'<rootDir>/src/features/**/*.component.ts',
		'<rootDir>/src/features/**/*.service.ts'
	],
	coverageDirectory: '<rootDir>/testing/coverage/',
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/src/bootstrap/configuration/tsconfig.spec.json',
			stringifyContentPathRegex: '\\.html$',
			astTransformers: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')]
		}
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	moduleNameMapper: {
		'^src/(.*)$': '<rootDir>/src/$1',
		'^@application/(.*)$': '<rootDir>/src/app/$1',
		'^@features/(.*)$': '<rootDir>/src/features/$1'
	},
	reporters: ['default', ['jest-junit', { output: './testing/jest-report.xml' }]],
	snapshotSerializers: [
		'jest-preset-angular/AngularSnapshotSerializer.js',
		'jest-preset-angular/HTMLCommentSerializer.js'
	],
	testEnvironment: 'jest-environment-jsdom-thirteen',
	testMatch: ['<rootDir>/src/**/@(*.)@(spec.ts)'],
	testResultsProcessor: 'jest-sonar-reporter',
	transform: {
		'^.+\\.(ts|js|html)$': 'ts-jest'
	},
	transformIgnorePatterns: ['node_modules/(?!@ngrx)']
};
