import React from 'react';
import Asset from './Asset';

const AssetList = ({ assets }) => (
  <div>
    hello
    {assets.map(a =>
      <Asset
        key={a.id}
        {...a.asset}
      />
    )}
  </div>
)

export default AssetList