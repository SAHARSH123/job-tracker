const FormRowSelect = ({ labelText, id, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={id} className="form-label">
        {labelText || id}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className="form-select">
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
