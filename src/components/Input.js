const Input = ({ id, type, inputValueError, errorText, ...props }) => {
  const inputNameClasses = inputValueError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <div className={inputNameClasses}>
      <label htmlFor={id}>{id}</label>
      <input type={type} id={id} {...props} />
      {inputValueError && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default Input;
