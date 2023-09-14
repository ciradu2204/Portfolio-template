import {test, expect,} from '@playwright/test'
let page;
test.describe('All My Tests', () => {

    test.beforeEach(async({browser}) => {
        page = await browser.newPage()
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html')
    })

    test.afterAll(async() => {
        await page.close()
    })

    test('homepage', async() => {
        await page.waitForURL('https://www.saucedemo.com/inventory.html')
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('a').filter({ hasText: '2' }).click();
    })

    test('logout', async() =>{
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    })

})

