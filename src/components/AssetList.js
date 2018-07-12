import React from 'react';
import Asset from './Asset';
import PropTypes from 'prop-types'

const AssetList = ({ assets }) => (
  <div className="section">
    <div className="container">
      {assets.map(asset =>
        <Asset
          key={asset.id}
          {...asset}
        />
      )}
      {!assets.length && (
        <div className="level">
          <h3 className="level-item">No assets available...</h3>
        </div>
      )}
    </div>
  </div>
)

AssetList.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired
    }).isRequired
  }))
}

export default AssetList