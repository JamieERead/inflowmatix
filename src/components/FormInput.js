import React from 'react';

const FormInput = ({ name, value, placeholder, submitted, handleInputChange }) => (
  <div className="field is-horizontal">
    <div className="field-label">
      <label className="label is-capitalized">{name}</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input
            className={"input " + (submitted && !value && 'is-danger')}
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleInputChange} />
        </div>
        {submitted && !value && <p className="help is-danger">
          This field is required
        </p>}
      </div>
    </div>
  </div>
)

export default FormInput