import React from 'react';
import { connect } from 'react-redux'

let AssetForm = ({ dispatch }) => {
    return (
        <div>
            <form>
                <label>Hello</label>
            </form>
        </div>
    )
}
AssetForm = connect()(AssetForm)
export default AssetForm