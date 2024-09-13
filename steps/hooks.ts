import { After, Before } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";
import { Loginpage } from "../pages/loginpage";

let page: Page
let browser: Browser
let loginpage: Loginpage

Before(async ()=> {

 browser = await chromium.launch({headless: false})

  const context = await browser.newContext();

  page = await context.newPage();

  await page.goto("http://localhost");

  loginpage = new Loginpage(page);

  return page;
    

})


After(async ()=> {

    await browser.close();
    
})

export {page, browser, loginpage}