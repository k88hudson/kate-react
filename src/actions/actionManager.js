const ActionManager = require("lib/ActionManager");

module.exports = new ActionManager({
  types: [
    "NOTIFY_DELETE"
  ],

  actions: {
    Notify(type, data) {
      const action = {type, meta: {broadcast: true}};
      if (data) action.data = data;
      return action;
    },

    NotifyDelete(url) {
      return this.Notify("NOTIFY_DELETE");
    }
  }
});
