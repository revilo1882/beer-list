# Avocet Frontend Engineer Technical Test

## Introduction

A small interactive front end app built in three days with React and consuming [Brewdog's Punk API V2](https://punkapi.com/documentation/v2) with a card-based UI to display a list of beers.

## Requirements

- [ ] Should be an npm compliant project (i.e. have a `package.json`)
- [ ] All required tasks should be executed via npm scripts (the scripts can be wrappers for grunt/gulp/webpack/other commands)
- [ ] Should support sorting based on:
    - Name
	- ABV
	- Volume
	- First brewed
- [ ] Should have a README file containing general information about the project and setup instructions

## Installation

Clone the repository then in the command line run:

```bash
$ cd beer-list
$ npm install
$ npm start
```

To run the test and check the coverage run the below commands:

```bash
$ npm test
$ npm test -- --coverage
```
The app is also deployed on Heroku [here](https://tranquil-sands-97349.herokuapp.com/).

## Approach

- My first course of action was to decide on the project's tech stack, I chose [React](https://reactjs.org/) for the frontend library and [Sass](https://sass-lang.com/) to compile the style sheets as I have been learning about both of these recently.

- Next I investigated and built the basis for a react project using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) I wanted to learn about compilers and how to create a React project from scratch.

- However by the time I got to looking at adding Jest I felt I would spend too much time so I built the project using [create-react-app](https://github.com/facebook/create-react-app) and would later use Webpack to rebuild the project with Jest.

- I set up the react app using create-react-app, fetched the data from the api and used [Redux](https://redux.js.org/) to store the data. I want to understand Redux on a deeper level and was happy with this setup I was able to render a list of beers on a webpage.

- My next task was to implement a card system to render the images and names of each beer, luckily I had a system in place from using [this css and sass course](https://www.udemy.com/advanced-css-and-sass/).

- Once this was complete I wanted to use some other css tricks I had learned from the course so I added further design when each card is hovered.

- Although I Initially stored the data from the api using Redux, when it got to sorting the data I decided for the purposes of this test it would take too much time to learn the process and took the decision to remove the store which is why the final app doesn't use Redux.

- Sorting the data caused a few problems including an error 'objects are not valid as a react child' occurring only when sorting by name which I managed breakdown and resolve by taking the function call out of the Render method.

- I decided early on that I wanted to make the app responsive using media queries as this is something I had recently learned and was eager to try out in this project.  I implemented a system rendering from 1 to 4 cards per line depending on the screen size and I'm happy with the result.


## Further Work

Given more time I would like to implement the following:

- Add a reverse sorting function for each of the options.
- The volume sorting presumes each of the units is litres so given more time I would like to try assign a value to the unit and multiply it by the value.
- Investigate the 'objects are not valid as a react child' error and why it was only occuring for the name sort.  Through this I would like to convert the sorting component into a function called in the Select component.
- Build the same project using Webpack and Redux.
- Add an isLoading state to the app and have error catching on the api.
- Mock the api with a [Sinon](https://sinonjs.org/) spy to improve test coverage.
