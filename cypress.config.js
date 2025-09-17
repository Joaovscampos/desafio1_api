import { defineConfig } from "cypress";
import  'dotenv/config';
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
    experimentalWebKitSupport: true,
    baseUrl: process.env.BASE_URL,
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: false,
    watchForFileChanges: false,
    retries: {
      runMode: 2,
    },
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on,config, {
        resultsDir: 'allure-results',
      })
      return config;
    },
  },
});
