/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
        name: 'App',
		clearMocks: true,
		cache: false,
		chaiConfig: {
			includeStack: true
		},
		coverage: {
			enabled: true,
			provider: "v8",
			include: ["src/**/*.js"]
		},
		dir: "test",
		include: ["**/*.test.js"],
		isolate: true,
		pool: "threads",
		disableConsoleIntercept: false,
		logHeapUsage: true,
		ui: false
	}
});
