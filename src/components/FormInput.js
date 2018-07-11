import React from 'react';

const FormInput = ({ name, value, handleInputChange }) => (
  <div className="field is-horizontal">
    <div className="field-label">
      <label className="label is-capitalized">{name}</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            name={name}
            value={value}
            onChange={handleInputChange} />
        </div>
      </div>
    </div>
  </div>
)

export default FormInput