import { test, expect } from '@playwright/test';
import { email, password, firstName, lastName, clickSubmitButton } from '../../src/utils/helper';
import { existingUsers } from '../../test-setup/localstorage.setup'

test.describe('signup form tests', () => {
    test('signs up with valid first and last name', async ({ page }) => {
        await page.goto('http://localhost:8080/login');
        const existingUser = existingUsers[0];

        // Click the element that contains the text "Signup"
        await page.getByRole('link', { name: 'Signup' }).click();

        // Enter signUp details
        await firstName(page, 'John');
        await lastName(page, 'Doe');
        await email(page, existingUser.email);
        await password(page, existingUser.password);
        await clickSubmitButton(page);

        // Check if signup was successful
        await expect(page.locator('text=Welcome')).toBeVisible(); // Will match any text containing 'Welcome'
    });
});
