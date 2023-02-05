# FoodFinderClient

Pairs with [FoodFinderAPI](https://github.com/briannarenni/FoodFinderAPI), which I originally made a client app in Angular for. I wanted to use the same project to learn the basics of React next.

FoodFinder initially loads and calls an apiService class, that fetches an array of restaurant objects from my own API (linked above). Once the data's fetched, App renders the Home component. Home controls the state of that data, and the Navbar component allows for sorting and filtering of the data. Each restaurant also has a modal to show a menu.

So far, this project has given me a much greater understanding of how powerful the React Hooks feature is, how they use the component lifecycle to control re-rendering, and how a development process varies between Angular and React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
