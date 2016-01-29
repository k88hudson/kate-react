## TODO:
- clean up package.json dependencies
- add routing example
- add mocha/node tests
- add karma tests examples

## Running the project
First, `npm install` all dependencies.

`npm start` will run the development server.

## Build scripts
Run `npm run help` to see all possible npm commands for this project.

All build scripts are found in `yamscripts.yml`, which compile to `package.json`.

If you add or change a build script, make sure you run `npm run yamscripts` to compile it.

## Localization
Localization is implemented with [react-intl v2.0](https://github.com/yahoo/react-intl/issues/162).

## Strings
Strings can be added to `strings/en-US/strings.json`.

## Strings as text nodes
In order to display strings as text nodes, use the `<FormattedMessage>` component:

```js
const {FormattedMessage} = require("react-intl");

render() {
  return (<div>
    <FormattedMessage
      id="greeting"
      defaultMessage="Hello, {name}! How are you?" />
  </div>);
};
```

## Accessing strings programmatically
If you need to use a string in an attribute or somewhere other than a text node, you should use the `InjectIntl` helper.
This will add an `intl` object to `this.props` with all the functions you need.

```js
const {injectIntl} = require("react-intl")

const MyComponent = React.createClass({
  render() {
    return (<div>
      <img src="./hello.jp" alt={this.props.intl.formatMessage("greeting")} /></div>
    </div>);
  }
});

// Use this instead of MyComponent
module.exports = injectIntl(MyComponent);
```
