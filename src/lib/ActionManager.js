module.exports = class ActionManager {
  constructor(options) {
    this._types = new Set(options.types);
    this._actions = this._defineActions(options.actions);
  }

  // Helps you makes sure you don't misspell action types in your reducers
  // instead of case "BLAH":, use case am.type("BLAH"):
  type(type) {
    if (!this._types.has(type)) throw new Error(`Sorry, ${type} is not a valid type. Check your action manager.`);
    return type;
  }

  _defineActions(actions) {
    Object.keys(actions).forEach(key => {
      if (this[key]) throw new Error(`Sorry, you can't name an action ${key}. Please choose another name.`);
      this[key] = (...args) => {
        const action = actions[key].call(this, ...args);
        if (typeof action === "function") {
          return action;
        } else {
          // Check if a type exists at all
          if (!action.type) throw new Error(`Tried to create a ${key} action, but it doesn't appear to have a type.`);

          // Validate the type
          this.type(action.type);

          return action;
        }
      };
    });
  }
};
