import { Page, expect } from '@playwright/test';

export async function email(page: Page, email: string) {
    await page.locator('input#email').pressSequentially(email);
}

export async function password(page: Page, password: string) {
    await page.locator('#password').pressSequentially(password);
}

export async function loginButton(page: Page) {
    await page.locator('button:has-text("Login")').click();
}

export async function waitForLogin(page: Page) {
    await page.waitForTimeout(1000); // Replace with smarter wait if needed
}

export async function firstName(page: Page, firstName: string) {
    await page.locator('#firstName').fill(firstName);
}

export async function lastName(page: Page, lastName: string) {
    await page.locator('#lastName').fill(lastName);
}

export async function clickSubmitButton(page: Page) {
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await expect(submitButton).toBeEnabled();
    await submitButton.click();
}
