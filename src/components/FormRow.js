import React from "react";

const FormRow = ({ type, id, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={id} className="form-label">
        {labelText || id}
      </label>

      <input
        type={type}
        value={value}
        id={id}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
