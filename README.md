# React GIT API

This project was created as a challenge in order to consume github API and fetch the list of the commits from an existing uploaded Github repository. [GitHub API documentation](https://docs.github.com/en/rest/reference/repos).

## REACT WEB
---
This project uses React, with `create-react-app` client and it currently has 2 routes: HOME and COMMITS

## Libraries Used
---
- react-router-dom": "^5.2.0"
- reactstrap": "^8.8.1"
- rxjs": "^6.6.3"

React Router Dom for the routing funcionality, Reactstrap for the styling and rxjs combined with the fetch API and Context API in order to manage the state.

## HOME PAGE
---
It will display a generic Home page with a navbar, a footer and a Jumbotron.

## COMMITS PAGE
---
It will display a table with the list of commits found for this repository, but there is a simple form that allows the user to search for data from another repository.

## DEMO
---
[Click Here to test the Site](https://reactgit.s3-us-west-1.amazonaws.com/index.html).
