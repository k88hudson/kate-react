// Obviously this is pretty static, it should be replaced
// by something more dynamic.

const localeData = require("react-intl/lib/locale-data/en");
const locale = "en-US";
const messages = require("strings/en-US/strings.json");

module.exports = {
  localeData,
  props: {messages, locale}
};
