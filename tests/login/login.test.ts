import { test, expect } from '@playwright/test'
import { existingUsers } from '../../test-setup/localstorage.setup'
import { email, password, loginButton, waitForLogin, } from '../../src/utils/helper';

test.describe.configure({ mode: 'serial' });

test.describe('login form tests', () => {
  test('logging in works with existing account', async ({ page }) => {
    await page.goto('http://localhost:8080/login');

    const existingUser = existingUsers[0];

    await email(page, existingUser.email);
    await password(page, existingUser.password);
    await loginButton(page);
    await waitForLogin(page);

    await expect(page.getByText('Log out')).toBeVisible();
  });
});