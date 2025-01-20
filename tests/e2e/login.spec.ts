import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/login-page';
import { URLs } from '@utils/constants';
import * as fs from 'fs';
import * as path from 'path';

// Load credentials from JSON
const credsPath = path.resolve(__dirname, '../../data/credentials.json');
const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));

test.describe('Login Functionality', () => {
    test('Valid login with standard_user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const username = creds.users.standard_user;
        const password = creds.password;

        await loginPage.navigateTo(URLs.sauceDemo);
        await loginPage.login(username, password);

        // Verify successful login
        const isSuccess = await loginPage.isLoginSuccessful('#inventory_container');
        expect(isSuccess).toBeTruthy();
    });

    test('Invalid login with incorrect credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const username = creds.users.invalid_user;
        const password = creds.wrong_password;

        await loginPage.navigateTo(URLs.sauceDemo);
        await loginPage.login(username, password);

        // Verify error message
        const errorMsg = await loginPage.getErrorMessage();
        expect(errorMsg).toBe(creds.errorMsg.invalidCreds);
    });

    test('Locked out user login attempt', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const username = creds.users.locked_out_user;
        const password = creds.password;

        await loginPage.navigateTo(URLs.sauceDemo);
        await loginPage.login(username, password);

        // Verify error message
        const errorMsg = await loginPage.getErrorMessage();
        expect(errorMsg).toBe(creds.errorMsg.lockedOut);
    });
});
