
import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber"
import { Browser, chromium, Page } from "@playwright/test";
import { loginpage } from "./hooks";


setDefaultTimeout(50000);

Given('Saurabh is a writer and has access to the Conduit application', async function () {

  

  });

  When('Saurabh uses the credentials as {string} and {string}', async function (useremail, userpassword) {
    await  loginpage.loginToApplication(useremail, userpassword);
  });

  Then('Saurabh get access to the application to write and view articles', async function () {

    await loginpage.verifyLogin("testuser")
  

  });
