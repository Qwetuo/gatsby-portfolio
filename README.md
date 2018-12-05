# Min Zhuang Portfolio (Gatsby)
### Info
Built on top of a Gatsby starter template that can be found [here](https://www.gatsbyjs.org/starters/gatsby-starter-dimension/) or visit the demo page [here](https://gatsby-dimension.surge.sh/)

Features added by me:
* About: Skill bar - source code [here](https://github.com/Qwetuo/gatsby-portfolio/blob/master/src/components/About.js)
* Projects: Card/div showing information about the projects from markdown files in [this folder](https://github.com/Qwetuo/gatsby-portfolio/tree/master/src/projects) - source code [here](https://github.com/Qwetuo/gatsby-portfolio/blob/master/src/components/ProjectCard.js)
* Contact: Configured contact form to trigger google sheets api to append a new row into a spreadsheet in my drive - source code [here](https://github.com/Qwetuo/gatsby-portfolio/blob/master/src/components/Contact.js)
* Burger Menu: Added menu at bottom right of page for easier navigation - source code [here](https://github.com/Qwetuo/gatsby-portfolio/blob/master/src/components/BurgerMenu.js)


### Installation / Running locally

* `
git clone https://github.com/Qwetuo/oneshop`
* `npm install`
* If you would like the contact form to access your google sheets, please include the following environmental variables in an .env file.
  * `GATSBY_API` : On https://console.developers.google.com/ , create a project, enable Google Sheets API and get the API key
  * `GATSBY_EMAIL` : Create a service account and get the client_email from the json file
  * `GATSBY_KEY` : from the same json file, get the key private_key (Note: for it to work when deployed, change the env var's "\n" to new paragraph spacing)
  * `GATSBY_SHEET_ID` : Create a sheet with field "Name","Email", "Message", "Date" and get its sheet ID from the link URL
* Run `gatsby develop` in the terminal to start the dev site.


### Created with

Gatsby | REACT | GraphQL | Google Sheets API