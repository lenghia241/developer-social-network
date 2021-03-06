import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = props => {
  const {
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled,
    icon
  } = props;
  return (
    <div className="row">
      <div className="input-field col s12">
        <i className="material-icons prefix">{icon}</i>
        <input
          id={name}
          type={type}
          className={error ? "invalid" : "validate"}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
        />
        <label className="active" htmlFor={name}>
          {label}
        </label>
        <span className="helper-text left" data-error={error}>
          {info ? info : ""}
        </span>
      </div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  icon: PropTypes.string
};

// <TextFieldGroup
// name=""
// placeholder=""
// value={}
// label=""
// error={}
// type=""
// onChange={}
// />

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
