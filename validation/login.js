const Validator = require("validator");
const customIsEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !customIsEmpty(data.email) ? data.email : "";
  data.password = !customIsEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is require";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is require";
  }

  return {
    errors,
    isValid: customIsEmpty(errors)
  };
};
