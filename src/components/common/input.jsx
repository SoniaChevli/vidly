import React from "react";
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} />
      {label}
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control col-sm-3"
      />
      {error && <div className="alert alert-danger col-sm-3">{error}</div>}
    </div>
  );
};

export default Input;
