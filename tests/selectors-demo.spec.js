import {test, expect} from "@playwright/test"

test('Selectors Demo', async({page}) =>{
   await page.goto('https://www.saucedemo.com/')
   await page.locator('id=user-name').fill('Edison')
   await page.locator('[id=user-name]').fill('Einsten')
   // CSS Selectors
   await page.locator('#login-button').click()
   // Xpath
    
   // Text
   await page.locator('text=LOGIN').click();
   await page.pause()
   await page.locator(':has-text("LOGIN")').click();


})

test.only('Demo Login Test 2', async({page}) => {
    await page.goto('')

})