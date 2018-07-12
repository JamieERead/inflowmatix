import React from 'react';
import PropTypes from 'prop-types'

const Asset = ({ name, description, location }) => (
  <div>
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{name}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <div><b>lat</b> {location.latitude} <b>long</b> {location.longitude}</div>
          {description}
        </div>
      </div>
    </div>
  </div>
)

Asset.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired
  })
}

export default Asset