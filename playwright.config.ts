import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:4200/',
  },
  testMatch: /.*\.e2e\.ts/,
};
export default config;
