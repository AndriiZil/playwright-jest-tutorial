const { chromium } = require('playwright');
const { expect } = require('expect');
const {
  afterAll,
  afterEach,
  it,
  beforeEach,
  beforeAll,
} = require('@jest/globals');

let browser;
let page;

beforeAll(async () => {
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
});

it('Jest with Playwright Demo', async () => {
  await page.goto('https://www.example.com');
  const result = await page.title();
  expect(result).toBe('Example Domain');
});
