import React from 'react';
import PropTypes from 'prop-types'

const SubmitButtons = ({ handleFormCancel }) => (
  <div className="field is-horizontal">
    <div className="field-label" />
      <div className="field-body">
        <div className="field is-grouped">
          <p className="control">
            <button type="submit" className="button is-primary">
              Save Asset
            </button>
          </p>
          <p className="control">
            <button 
              onClick={handleFormCancel}
              type="button" 
              className="button is-primary">
              Cancel
            </button>
          </p>
        </div>
    </div>
  </div>
)

SubmitButtons.propTypes = {
  handleFormCancel: PropTypes.func.isRequired
}

export default SubmitButtons