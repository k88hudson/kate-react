const am = require("actions/action-manager");

const DEFAULTS = {
  rows: [],
  error: false,
  init: false,
  isLoading: false
};

module.exports = function setRowsOrError(requestType, responseType) {
  return (prevState = DEFAULTS, action) => {
    const state = {};
    const meta = action.meta || {};
    switch (action.type) {
      case am.type(requestType):
        state.isLoading = true;
        break;
      case am.type(responseType):
        state.init = true;
        state.isLoading = false;
        if (action.error) {;
          state.error = action.data;
        } else {
          state.rows = action.data;
          state.error = false;
        }
        break;
      default:
        return prevState;
    }
    return Object.assign({}, prevState, state);
  };
};

module.exports.DEFAULTS = DEFAULTS;
