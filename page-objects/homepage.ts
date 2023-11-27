import {Page} from '@playwright/test'
import { BaseClass } from "../setup/src/baseclass"

const base = new BaseClass()
const testdata = base.getTestData()
const filepath = base.getFilePath()
let page: Page

function config (json: { [x: string]: any }, variableKeyName: string | number){
    const keyValue = json[variableKeyName]
  //  console.log(keyValue)
    return keyValue
}

const appurl =  config(base.readData(filepath), "appurl")
// console.log ("app url : ",appurl)

export default class HomePage{

    async launchApp(){
        await page.goto(appurl)
    }
}