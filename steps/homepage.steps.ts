import {Given} from '@cucumber/cucumber'
import HomePage from '../page-objects/homepage'

const home = new HomePage()

Given('Launch test application', {timeout : 30000},
async function () {
    await home.launchApp()    
})
