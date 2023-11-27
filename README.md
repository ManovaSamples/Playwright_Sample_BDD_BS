# Playwright_Sample_BDD_BS
playwright-sample

In this project basic actions done in web pages are covered. This can be used as reference for you project/framework
This will help you to create your project from scratch


This test automation project is based on playwright tool and TypeScript used as a scripting language.
It is a BDD framework.
The tests are written in the feature files using Gherkin syntax.
To run this project, you need to have NodeJS installed on your machine.
To run projects in different browser used Browser stack - Please use your browser stack credentials to exeute tests in Browser stack.

Sample website used for all actions 
https://the-internet.herokuapp.com/ 


Basic setup of the project
**************************
1. Create empty folder in your desktop
2. Open the folder in VSCODE
3. create package.json file using following command
    npm init
    fill below details as per the requirement
   
    package name: 
    version: 
    description: This project is a sample plywright bdd framework
    entry point: (index.js)
    test command:
    git repository: 
    keywords: playwright BDD browserstack
    author: 
    license: (ISC)

4. If you wish to install pretteir please do so by using following command
    npm install prettier

5. Install playwright
    npx playwright install 

6. Install playwright test
    npm install @playwright/test
    
7. Install cucumber
    npm i @cucumber/cucumber

8. Install type nodes
    npm install --save @types/node