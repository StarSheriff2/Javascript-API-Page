# JavaScript API Project

![](https://img.shields.io/badge/Microverse-blueviolet)
![](https://img.shields.io/badge/Academic-blue)
![](https://img.shields.io/badge/HTML-red)
![](https://img.shields.io/badge/JavaScript-yellow)
![](https://img.shields.io/badge/CSS-blue)
![](https://img.shields.io/badge/Webpack-green)
![](https://img.shields.io/badge/Jest-orange)

> The website shows a list of elements from the Hyrule Compendium API.

![screenshot](./other/app_screenshot.png)

## About
The page consumes data stored in 2 external **APIs**. The base *API* is located [here](https://botw-compendium.herokuapp.com/api/v2). We pull all the main content of the page from it. We use another **API** located [here](https://us-central1-involvement-api.cloudfunctions.net/capstoneApi) to store all interactions on the page, such as likes and comments.

We used **async** and **await** to handle all API calls. We compiled the project using Webpack.

The Kanban methodology was employed to work in this project, where each developer owned one main feature implementation.
### Features:
- Browse through a list of all elements in the **monsters** category
- Like any monster
- See information about each monster by clicking on the comment button
- Comment any monster card
### Live Demo
See demo here [https://github.com/StarSheriff2/Leaderboard-Eureka-JS/](https://starsheriff2.github.io/Leaderboard-Eureka-JS/)

### Built With
- HTML, CSS, JS
- NPM 7.18.1
- Webpack 5.48.0
- HtmlWebpackPlugin
- webpack-dev-server 3.11.2
- Jest 27.0.6
- Linters: ESLint, Stylint, WebHint
- VS Code

### About the API

- This app consumes two public APIs located at https://botw-compendium.herokuapp.com/api/v2 and https://us-central1-involvement-api.cloudfunctions.net/capstoneApi
- The documentation for the APIs can be accessed here:
    - [Hyrule Compendium](https://gadhagod.github.io/Hyrule-Compendium-API/#/)
    - [Involvement API](https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270)

## Getting Started

To get a local copy up and running, follow these simple example steps.

### Prerequisites
- A browser to open the main file
- Node.js
- NPM

### Setup
1. Open your terminal or command prompt.
2. If you do not have git installed in your system, skip this step and go to step 3; otherwise, go to the directory where you want to copy the project files and clone it by copying this text into your command prompt/terminal: `git@github.com:StarSheriff2/Javascript-API-Page.git`.
<br>Now go to the ***"Install Dependencies"*** section
3. Download the program files by clicking on the green button that says “**Code**” on the upper right side of the project frame.
4. You will see a dropdown menu. Click on “**Download ZIP**.”
5. Go to the directory where you downloaded the **ZIP file** and open it. Extract its contents to any directory you want in your system.

### Install Dependencies
1. Go to the root directory of the project
2. In your command line, while in the root dir, type `npm install`. It will install all necessary dependencies in your project files
3. Now type `npm run start`. It will load the project in your default browser.<br><br>
**Note:<br>_This command will not stop on its own. If you change something in your project files, it will recompile and reload the page in your browser. To exit, hit "ctrl + c"_**

## Development

### Bundle project

- `npm run build`
### Testing
To test, run

- `npm test`

### Linters
To run the linters included in this repository, go to the root directory of your repository and copy/paste the following commands into your terminal:
(**Note:** Make sure you run `npm install` before you do this)
- to run WebHint, `npx hint .`
- for Stylelint, `npx stylelint "**/*.{css,scss}"`
- for ESlint, `npx eslint.`

## Usage

- Like any monster by clicking on the sword that is visible in the card
- To comment, click on the comment button and enter your comment information

## Author

👤 **Juan Carlos Hernandez**
- GitHub: [Juan Carlos Hernandez](https://github.com/jchernandez87)
- Twitter: [Twitter](https://twitter.com/Juancar70771241)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/juan-carlos-hernandez-200a05175)

👤 **Arturo Alvarez**
- Github: [@StarSheriff2](https://github.com/StarSheriff2)
- Twitter: [@ArturoAlvarezV](https://twitter.com/ArturoAlvarezV)
- Linkedin: [Arturo Alvarez](https://www.linkedin.com/in/arturoalvarezv/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/StarSheriff2/Javascript-API-Page/issues).

## 🤝 Acknowledgements

[Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API/#/) 🎮

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](https://github.com/StarSheriff2/Javascript-API-Page/blob/main/LICENSE) licensed.

