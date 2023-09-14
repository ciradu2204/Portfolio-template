import {test, expect} from '@playwright/test'

test('Assertions demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    if(await page.$('text=The Kitchen')){
        await page.getByRole('heading', {name: 'The Kitchen' }).click()
    }

    //check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await page.pause()
    //check page url
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen')

    //screenshot
    await expect(page).toHaveScreenshot()

})