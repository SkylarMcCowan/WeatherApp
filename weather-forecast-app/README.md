# Weather App

This project is a simple weather application built with React. It allows users to enter a city name followed by a comma and the full state name (e.g., Columbia, South Carolina) to get the current weather and a 7-day forecast.

## Features

- Fetches and displays current weather data.
- Displays a 7-day weather forecast.
- Allows users to save multiple locations and view their weather data.
- Error handling for invalid locations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your local machine:

- Node.js
- npm (Node Package Manager)
- Git

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/weatherapp.git
   cd weatherapp

2. **Install Directories**
    npm install

3. **Running the app**
    npm start

This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload if you make edits. You will also see any lint errors in the console.

**Optional**

    npm run build
    
    This will build the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

Using the App

	1.	Enter Location:
	•	In the input field, enter the city name followed by a comma and the full state name (e.g., Columbia, South Carolina).
	•	Click on the “Submit” button to fetch the current weather and 7-day forecast for the entered location.
	2.	Select Location:
	•	If multiple locations match the entered query, a list of possible locations will be displayed.
	•	Click on the correct location to fetch the weather data for that location.
	3.	View Weather Data:
	•	The current weather data and 7-day forecast will be displayed on the screen.
	•	If the location is not found or an error occurs, an error message will be displayed.
	4.	Save Locations:
	•	Click the “Save Location” button to save the current location’s weather data.
	•	Saved locations will be displayed below the current weather data with their respective weather information.

Available Scripts

In the project directory, you can run:

npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify