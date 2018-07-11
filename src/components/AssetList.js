import React from 'react';
import Asset from './Asset';

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

export default AssetList