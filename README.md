I created this pricing component project as part of a [frontendmentor](frontendmentor.io) challenge.

It's a small app that allows users to set the page views they want to do something with, and shows the monthly price, or the yearly price if they choose to (billed annually).

# What I learned

## TypeScript

The purpose of this project was to solidify my *TypeScript* knowledge. This is the first time I use the `useState` and `useRef` hooks inside of a React TypeScript project, with their types, generics and other quirks.

## Accessibility

I also wanted to strenghten my newly acquired knowledge about *web accessibility*. I created this project with all users in mind this time. I made sure all main elements are:
- Reached with the *Tab* key.
- Focusable, with specific style applied to the element when focused on.
- Have specific *role* (`role` attribute).
- Have the appropriate `aria-*` attributes.

## Testing 

I learned how to write effective tests. I used the testing-library for that. I used the `userEvent` and `fireEvent` functions for the first time, because this app depends on user interaction.

While writing tests, I catched two major bugs that I wouldn't otherwise have caught. From now on, tests are a must.

---

The rest is the boilerplate from `create-react-app`;

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
