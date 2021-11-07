**Example cypress project using dummy payments website**

Open a terminal and run `npm init` to install cypress, puppeteer & reporting

To run the scenarios: `npx cypress open`


**Creating a report with each run**
To setup report for first use run `npm run setup:reports` to create report folders
To run with report run `npm run tests`
To open report goto `cypress\reports\mochareports\report.html`


Update settings such as `"video": true,` in `cypress.json`