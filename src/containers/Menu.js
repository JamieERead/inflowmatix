import React from 'react';
import { connect } from 'react-redux';
import { newAsset } from '../actions';

let Menu = ({ dispatch }) => (
  <div className="container">
    <button
      onClick={() => dispatch(newAsset())}
      className="button is-primary">
      Create Asset
    </button>
    <hr className="clear" />
  </div>
)

Menu = connect()(Menu)
export default Menu