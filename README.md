Udacity FEND Project 4 - Evaluate News Articles Using Sentiment Analysis API
This is the fourth project in the Udacity Front End Web Developer Nanodegree Program.

Project Background

The aim of the project is to have the user enter the url of a news article on the form presented on the website. When the user presses the submit button, the url is sent to MeaningCloud which analyses the sentiment of the article by way of its Sentiment Analysis API. The UI is then updated using the results obtained from the sentiment analysis.

Project Requirements

create a front-end UI form where users can enter a url to be analysed using Sentiment Analysis API;
set up express server in order to make fetch requests to MeaningCloud
set up webpack dev server and production build configurations;
perform testing using jest; and
set up service worker using workbox.
Project Tech Stack
programming languages: JavaScript, CSS, HTML;
webserver - Node
web application framework for routing: Express
build tool: Webpack;
external script: Service Worker; and
external API - MeaningCloud (Sentiment Analysis API)
Project Tasks
The starter code was provided by Udacity. In addition to the starter code I implemented the following:

set up webpack for development and production;
set up webpack loaders and plugins;
developed front-end and back-end JavaScript to handle the requests to external API on form submission;
developed functionalities to validate the form input;
created layouts and page design with CSS;
set up Service Workers; and
wrote unit tests for the functions defined in the src/client/js directory using Jest.
Getting Started
Before getting started, you must have the following:

a browser, preferably Chrome;
a code editor, e.g. Visual Studio Code;
the project depends on Nodejs and Node Package Manager(NPM)- visit nodejs to download and install.
Step 1: Install Dependencies
Fork and clone the master branch.

cd into your project directory.

Run the following command:

npm install

Step 2: Signup for an API key
Go here. Signing up will get you an API key.

Step 3: Environment Variables
We need to declare our API key. Follow the instructions below:

Use npm or yarn to install the dotenv package

npm install dotenv

Create a new .env file in the root of the project.

Insert the API key in the .env file like this:

API_KEY = ************\*************

Go to your .gitignore file and add .env - this ensures that the environment variables do not get pushed to Github. API keys should be protected and skipping this step means that your API key will get pushed to Github and can be accessed by everyone.

Step 4: Running the Development Server
Compile and start the server by typing the following command in your terminal: npm run build-dev
Step 5: Testing (optional)
Run test scripts to test JavaScript functions formHandler.js and urlChecker.js. Type the following command in your terminal:

npm run test

Step 6: Running the Production Server
Open a new terminal window

Compile the code

npm run build-prod

Start the server

npm start

Step 7: Access localhost
Go to your browser and enter url

localhost:3031

Enter the url of a news article in the space provided, push the submit button, and enjoy the results of the analysis of your news article!
