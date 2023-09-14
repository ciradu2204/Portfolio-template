import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/login'
test('Demo Login Test 1', async({page}) => {
    const login = new LoginPage(page)
    await login.goToLoginPage('https://demo.applitools.com/')
    await login.login("Cynthia", '12345')

})