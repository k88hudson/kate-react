const redux = require("redux");
const thunk = require("redux-thunk");
const reducers = require("reducers/index");

const middleware = [
  thunk
];

// Logging for debugging
if (__CONFIG__.LOGGING) {
  const createLogger = require("redux-logger");
  middleware.push(createLogger({
    level: "info",
    collapsed: true
  }));
}

module.exports = redux.createStore(
  redux.combineReducers(reducers),
  redux.applyMiddleware([...middleware])
);
