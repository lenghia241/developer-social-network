const Validator = require("validator");
const customIsEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !customIsEmpty(data.name) ? data.name : "";
  data.email = !customIsEmpty(data.email) ? data.email : "";
  data.password = !customIsEmpty(data.password) ? data.password : "";
  data.password2 = !customIsEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is require";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is require";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is require";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 to 30 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password confirmation field is require";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password and password confirmation are not match";
  }

  return {
    errors,
    isValid: customIsEmpty(errors)
  };
};
