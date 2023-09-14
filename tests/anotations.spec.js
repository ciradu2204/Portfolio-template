import { test, expect } from "@playwright/test";
test.skip('Test One', async({page}) => {

})

test('not yet ready', async({page}) => {
    test.fail()
})

test.fixme('test to be fixed', async({page}) => {

})

test.slow('slow test', async({page}) => {
})

test.only('slow test', async({page}) => {
    //run only this test
})

test('Test login page @smoke', async({page}) =>{
    
})