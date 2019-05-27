// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma'),
			require('karma-sonarqube-unit-reporter')
		],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, '../../../coverage'),
			reports: ['html', 'lcovonly'],
			fixWebpackSourcePaths: true
		},
		sonarQubeUnitReporter: {
			// sonarQubeVersion: 'LATEST',
			outputFile: '../../../ut_report.xml',
			overrideTestDescription: true,
			testPaths: ['./src'],
			// testFilePattern: '.spec.js',
			useBrowserName: false
		},
		reporters: ['progress', 'kjhtml', 'sonarqubeUnit'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome', 'ChromeHeadless', 'Chrome_CI'],
		customLaunchers: {
			Chrome_CI: {
				base: 'Chrome',
				flags: ['--headless', '--disable-gpu', '--window-size=800,600', '--no-sandbox', '--remote-debugging-port=9222'],
				debug: true
			}
		},
		singleRun: false
	});
};