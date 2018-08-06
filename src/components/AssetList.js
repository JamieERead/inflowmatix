import React from 'react';
import Asset from './Asset';
import france from '../france'

function replaceAll(str, search, replacement) {
  return str.replace(new RegExp(search, 'g'), replacement);
};

class AssetList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let output = '';
    france.forEach(item => {
      if (item.value) {
        output += `UPDATE public.translation SET value = '${replaceAll(item.value.toString(), "'", "''")}' WHERE key = '${item.key}' AND codemarket = 'FR' AND type = 'website' AND countrycode = 'FR';
        `;
      }
    })
    let output2 = '';
    france.forEach(item => {
      if (item.value) {
        output2 += `INSERT INTO public.translation (key, value, codemarket, page, type, countrycode) values ('${item.key}', '${replaceAll(item.value.toString(), "'", "''")}', 'FR', '${item.page}', 'website', 'FR');
        `;
      }
    })
    let output3 = '';
    france.forEach(item => {
      if (item.value) {
        output3 += `UPDATE public.translation SET value = '${replaceAll(item.value.toString(), "'", "''")}' WHERE key = '${item.key}' AND codemarket = 'FR' AND type = 'website' AND countrycode = 'FR';
        INSERT INTO public.translation (id, key, value, codemarket, page, type, countrycode)
        SELECT ${item.id}, '${item.key}', '${replaceAll(item.value.toString(), "'", "''")}', 'FR', '${item.page}', 'website', 'FR'
        WHERE NOT EXISTS (SELECT 1 FROM public.translation WHERE key = '${item.key}' AND codemarket = 'FR' AND type = 'website' AND countrycode = 'FR');
        
               `
      }
    })
    return (
      <div className="section">
        <div className="container">
          {this.props.assets.map(asset =>
            <Asset
              key={asset.id}
              {...asset}
            />
          )}
          {!this.props.assets.length && (
            <div className="level">
              <h3 className="level-item">No assets available...</h3>
            </div>
          )}
          <h2>UPDATE</h2>
          <textarea style={{ 'width': '100%', 'height': '400px' }}>{output}</textarea>
          <h2>INSERT</h2>
          <textarea style={{ 'width': '100%', 'height': '400px' }}>{output2}</textarea>
          <h2>UPSERT</h2>
          <textarea style={{ 'width': '100%', 'height': '400px' }} value={output3}></textarea>
        </div>
      </div>
    )
  }
}

export default AssetList