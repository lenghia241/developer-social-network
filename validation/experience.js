const Validator = require("validator");
const customIsEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !customIsEmpty(data.title) ? data.title : "";
  data.company = !customIsEmpty(data.company) ? data.company : "";
  data.from = !customIsEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is require";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company name field is require";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is require";
  }

  return {
    errors,
    isValid: customIsEmpty(errors)
  };
};
