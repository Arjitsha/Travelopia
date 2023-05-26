Arjit Sharma – Travel Full Stack Application:
This is a simple travel booking application that allows users to submit their travel preferences and view the submitted form data. The project consists of a frontend application and a backend server.

Problem Statement:
The goal of this project is to create a two-page web application where users can fill out a travel booking form on the first page and view the submitted form data on the second page. The backend server should provide two JSON API endpoints, one for storing form submissions and another for retrieving existing form submissions.

Step 1:
Setting up Mongo DB database using Mongo DB Atlas as it helped hosting the database on AWS and connecting it with Mongo DB compass. We get URI to our database from the compass.

Step 2:
Setting up the backend: Java
Spring initializer is used to download all the dependencies:
1:  Mongo DB dependency
2:  Web dependency
3:  Lombok Dependency
4:  Spring core dependency

Setting up the Springboot application using IntelliJ.
1:  Repository to extend the database
2:  Service for the business logic.
3:  Controller to provide API's.


Step 3:
Setting up the frontend:
React is used for the frontend:
The main functionalities used:
1:  Axios/fetch to call the rest API
2:  Material UI and it's libraries like core, icon, button to provide styling
3:  Use of different hooks like UseState and UseEffect hook.

To run the project:
Step 1: Clone the project repository: 
git clone https://github.com/Arjitsha/Travelopia.git
Step 2:  Navigate to the project directory: cd Travelopia
Step 3:  Set up the backend server: using IntelliJ
o	Navigate to the backend directory: Backend_Springboot-Java
o	Configure the database connection and environment variables.
o	Start the backend server: Click on the start 
Step 4: Run the spring boot application
Step 5: Open the React Application in Vs Code
Step 4: Run the React application using "npm start" command in the terminal.
Step 5: Please make sure to refresh the page after submitting your details to get            all the details all together.

  
Provided links:
For database URI:
mongodb+srv://arjit:NJDfRwwYETPygiRH@cluster0.lhwcr4o.mongodb.net
































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
