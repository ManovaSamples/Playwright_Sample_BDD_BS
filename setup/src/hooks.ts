
//Browser stack intrgration at the bottom
//local execution

import { Browser, BrowserContext, Page, chromium } from '@playwright/test'
import { Before, After, BeforeAll } from '@cucumber/cucumber'

let browser: Browser;
let context: BrowserContext;
let page: Page

BeforeAll({timeout: 60 * 1000}, async () => {
    console.log(' ----> Running in Local Machine <---- ')
    browser = await chromium.launch({headless:false})
})

// AfterAll(async () => {
//     //console.log('Close Browser')
//     await global.browser.close()
// })

Before(async (scenario) => {
    console.log('---> Executing '+scenario.pickle.name)
    const context = await browser.newContext()
    page = await context.newPage()
})

After(async () => {
    //console.log('Close context and page')
    // await page.close()
    await context.close()
})

// AfterAll(async () => {
    
//     const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_APIKEY);
// const msg = {
//     to: 'manova@gmail.com',
//     cc: 'manova@example.com',
//     from: 'playwright@test.com',
//     subject: 'Playwright Practice Tests Results',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// try{
//     sgMail.send(msg)
// }catch(e){
//     console.log('SENDMAIL ERROR:'+e)
// }
// console.log('... After all executed ....')
// })

/*

 // browser stack integration
 const { CommonUtils }  = require( '../setup/commonutils')
 const playwright = require('playwright')
 const { Given, Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')
 const cp = require('child_process');
 const clientPlaywrightVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];
 const { chromium, firefox } = require('playwright');
 
 BeforeAll(async()=>{
     console.log(' ----> Running in Browser Stack <---- ')
 })
 const cutil = new CommonUtils()
 const build = cutil.getCurrentDate()
 Before({timeout: 60 * 1000},async (scenario) => {
     // global.browser = await playwright['chromium'].launch({ headless: false })
     const caps = {
         "projectName": "Plawright basics",
         "build" : build,
         'browser': 'chrome', // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
         'os': 'Windows',
         'os_version': '11',
         'name' : scenario.pickle.name,
         'browserstack.username': process.env.BROWSERSTACK_USERNAME,
         'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
         'browserstack.playwrightVersion': '1.32.3',  // 1.32.3,
         // Add additional configuration options here
     };
     global.browser = await chromium.connect({
         wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`
     })    
     console.log('---> Executing '+scenario.pickle.name+' in Browserstack <---')
 });
 
 Before({ tags: '@ignore' }, async function () {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     return 'skipped';
 });
 Before(async () => {
     // console.log('.... Before ....')
     global.context = await global.browser.newContext({viewport: { width: 2300, height: 1700 }})//{viewport: { width: 2048, height: 1536 }}
     
     global.page = await global.context.newPage()    
 })
 
 After(async ({ pickle, result}) => {
     
     console.log(result.status)
     if(result.status !== 'PASSED'){
         const image = await this.page?.screenshot();
         image && (await this.attach(image, 'image/png'));
         await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'failed'}})}`);
     }else{
         await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'passed'}})}`);
     }
     await global.page.close()
     
       // Close the browser context after each scenario
     await global.context.close();
     await global.browser.close()
 })
 */