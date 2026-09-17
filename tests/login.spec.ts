import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ces.wu.ac.th/main/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ระบบทะเบียน' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page1.getByRole('spinbutton', { name: 'Student ID (e.g. 69100000)' }).click();
  await page1.getByRole('spinbutton', { name: 'Student ID (e.g. 69100000)' }).fill('66127234');
  await page1.getByRole('textbox', { name: 'Email Password' }).click();
  await page1.getByRole('textbox', { name: 'Email Password' }).fill('10June2547');
  await page1.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/av0/rch/689kp/0x4AAAAAACa4jptYb_MQsuNo/light/fbE/new/normal?lang=auto"]').contentFrame().locator('body').click();
  await page1.goto('https://ces.wu.ac.th/registrar/home.asp');
});
