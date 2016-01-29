const React = require("react");
const ReactDOM = require("react-dom");
const {Provider} = require("react-redux");
const {IntlProvider, addLocaleData} = require("react-intl");

const Main = require("components/Main/Main");
const store = require("./store");
const intl = require("lib/intl");

addLocaleData(intl.localeData);

const Root = React.createClass({
  render: function () {
    return (<Provider store={store}>
      <IntlProvider {...intl.props}>
        <Main />
      </IntlProvider>
    </Provider>);
  }
});

ReactDOM.render(<Root />, document.getElementById("root"));
