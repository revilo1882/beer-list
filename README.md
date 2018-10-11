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

- My first course of action was to decide on the tech stack and I chose to build the project in React and use Sass for my styling language as I have been learning about both of these recently.

- Next I investigated and built the basis for a react project in Webpack as this was listed as a plus.

- However by the time I got to looking at adding Jest I felt I would spend too much time so I built the project using create-react-app and would later use Webpack to rebuild the projectr.

- So initially I set up the react app using create-react-app, fetched the data from the api and used Redux to store the data. I want to understand Redux on a deeper level and was happy with this setup I was able to render a list of beers on a webpage.

- My next task was to implement a card system to render the images and names of each beer, luckily I had a system in place from using [this css and sass course](https://www.udemy.com/advanced-css-and-sass/) and would later further the design to make the app responsive.

- Once this was complete I wanted to use some other css tricks I had learned from the course so I added further design when each card is hovered.

- Although I Initially stored the data from the api using Redux, by the time I got to sorting the data I decided for the purposes of this test it would take too much time to learn and took the decision to remove the tore which is why the final app doesn't use Redux.

- Sorting the data caused a few problems including an error 'objects are not valid as a react child' occurring only when sorting by name which I managed breakdown and resolve by taking the function call out of the Render method.  Due to this I have a sorting component which I intend to look at when I have more time.

- I decided early on that I wanted to make the app responsive using media queries as this is something I had recently learned and was eager to try out in this project.  I implemented a 1 to 4 card system depending on the screen size and I'm happy with the result.

## Challenges

- Redux with sorting and webpack with Jest.
- First time building a card system and a responsive website.
- Sorting
- Functional component


## Further Work

Given more time I would like to implement the following:

- Add reverse Sorting for each of the options.
- The volume sorting presumes each of the units is litres so given more time I would like to try assign a value to the unit and multiply it by the value.
- investigate the 'objects are not valid as a react child' error and convert the sorting component into a function.
- Build with Webpack and Redux.
- Add an isLoading state to the app and have an error catch on the api
- Mock the api with a Sinon spy to improve test coverage.
