import React from 'react';
import PropTypes from 'prop-types'

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

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default FormInput