import _Object$assign from "babel-runtime/core-js/object/assign";
import { defineMessages } from "react-intl";

var $tenant = process.env.ELECTRODE_TENANT;
var tenantMessages = void 0;

try {
  tenantMessages = require("./tenants/" + $tenant + "/default-messages"); //eslint-disable-line
} catch (err) {
  tenantMessages = {};
}

var messages = defineMessages({
  editMe: {
    "id": "WordlistComponent.defaultTenant.editMe",
    "defaultMessage": "Edit me!"
  }
});

module.exports = _Object$assign({}, messages, tenantMessages);