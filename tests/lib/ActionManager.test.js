const {assert} = require("chai");
const ActionManager = require("lib/ActionManager");

const DEFAULT_TYPE = "FOO";
const DEFAULT_ACTIONS = {Foo: () => ({type: "FOO"})};

describe("ActionManager", () => {
  let am;

  function setup(options = {types: [DEFAULT_TYPE], actions: DEFAULT_ACTIONS}) {
    am = new ActionManager(options);
  }

  beforeEach(setup);

  it("should create an action manager", () => {
    assert.ok(am);
  });

  describe("#type", () => {
    it("should return a valid type", () => {
      setup({types: ["BAR"], actions: {}});
      assert.equal(am.type("BAR"), "BAR");
    });
    it("should throw for a missing type", () => {
      let blah;
      assert.throws(() => {
        am.type(blah);
      }, "Sorry, undefined is not a valid type. Check your action manager.");
    });
    it("should throw for an invalid type", () => {
      assert.throws(() => {
        am.type("DOESNOTEXIST");
      }, "Sorry, DOESNOTEXIST is not a valid type. Check your action manager.");
    });
  });
});
