
import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber"
import { Browser, chromium, Page } from "@playwright/test";
import { loginpage } from "./hooks";


setDefaultTimeout(50000);

Given('Saurabh is a writer and has access to the Conduit application', async function () {

  

  });

  When('Saurabh uses the credentials as {string} and {string}', async function (useremail, userpassword) {
    await  loginpage.loginToApplication(useremail, userpassword);
  });

  When('Saurabh uses the credentials as', async function(dataTable){

    const data = dataTable.raw();

    const username = data[0][0];
    const password = data[1][0];

    await  loginpage.loginToApplication(username, password);

  });

  When('Saurabh uses the credentials as map', async function(dataTable){

    let useremail;
    let userpassword;

    dataTable.transpose().hashes().map(function (value) {
      useremail = value.useremail;
      userpassword = value.userpassword;
  })

    await  loginpage.loginToApplication(useremail, userpassword);

  });

  When('Saurabh uses the credentials as map 2', async function(dataTable){

    let useremail;
    let userpassword;

    dataTable.hashes().map(function (value) {
      useremail = value.useremail;
      userpassword = value.userpassword;
  })

    await  loginpage.loginToApplication(useremail, userpassword);

  });

  Then('Saurabh get access to the application to write and view articles', async function () {

    await loginpage.verifyLogin("testuser")
  

  });
