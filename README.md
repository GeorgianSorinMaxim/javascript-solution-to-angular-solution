# Transforming a JavaScript solution into a more scalable, general purpose and better performing solution exercise.

## About the app
•	The example has been implemented using AngularJS, JavaScript, LESS (CSS pre-processor).
•	Unit tests have been implemented using Karma + Jasmine.
• Using AngularJS, the given code was transformed into a more scalable, more general purpose and better performing solution, by using object-oriented paradigms, allowing for the rendering of any number of refinement panels and facets, new elements being possible to be added easily. The given JavaScript was used for emphasizing that way the new solution is general purpose.

## Requirements
•	Support any number of refinement panels with any names: Solved by using Angular Services for getting the data from the server and making use of $scope objects for loading the data into the views. Any number of refinement panels with any names can be rendered. Making use of objects made it easy to define panels with different proprieties.
•	Support any number of facets with any names displayed in any order: Same explanation as above, making use of objects make it easy to sort the order of the displayed elements.
•	Be written in an object oriented fashion: Met by using JavaScript and AngularJS objects, making use of a RESTful architecture (AngularJS Services).
•	Be clear and readable: Met by making use of best practices and using the AngularJS framework.
•	Unit test(s) support have been included, see the steps below on how to run the tests. Basic limited unit tests included.
•	No legacy JavaScript code removed.
•	HTML SEO compliance kept (sort of). Use https://prerender.io/ or https://www.deepcrawl.com/knowledge/best-practice/angular-js-and-seo/ for enforcing HTML SEO).
•	All browsers are supported.
•	Query strings, such as: '?refine=size:4,10,16|colour:1,4|brand:53,3392,12767' are supported.
•	No functionality for hiding the Clear or Clear All button links were included in the initial assignment.
•	AngularJS functions for the ClearAll and Clear buttons were included as commented code in the controller.js file.

## Setup
•	Run the page by opening the refinements.html file into a browser.

## Run the tests
•	If you have Node.js installed see the steps below. If you don't have Node.js installed, install from Node.js from: https://nodejs.org/en/download/.
•	From a CLI (command line interface) navigate to the root folder of the project, install the pre-requisites and then run the tests using the following:
```shell
$ sudo npm install -g karma
$ npm install jasmine-core karma-jasmine karma-chrome-launcher phantomjs-prebuilt --save-dev
$ karma test
```
