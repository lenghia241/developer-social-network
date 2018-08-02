const Validator = require("validator");
const customIsEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !customIsEmpty(data.school) ? data.school : "";
  data.degree = !customIsEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !customIsEmpty(data.fieldofstudy)
    ? data.fieldofstudy
    : "";
  data.from = !customIsEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School name field is require";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree name field is require";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is require";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is require";
  }

  return {
    errors,
    isValid: customIsEmpty(errors)
  };
};
