import {test, expect, chromium} from '@playwright/test'
test('Slow motion and Video recording demo', async() => {
    const browser  = await chromium.launch({
        slowMo:500,
        headless:false
    })
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width:800, height:600}
        }
    });
    const page = await context.newPage()

    await page.goto('https://demo.applitools.com/')
    await page.getByPlaceholder('Enter your username').fill("Cynthia")
    await page.getByPlaceholder('Enter your password').fill('12345')
    await page.waitForSelector('text=Sign in')
    await page.getByRole('link', { name: 'Sign in' }).click()
    await page.close()
    await context.close()

})