import React from 'react'
import AssetForm from "../containers/AssetForm";
import AllAssets from "../containers/AllAssets";
import Menu from "../containers/Menu";
import { connect } from 'react-redux';

let App = ({ showForm }) => (
  <div>
    <div className="hero">
      <div className="hero-body level">
        <h1 className="level-item">Asset Manager</h1>
      </div>
    </div>
    <Menu />
    {showForm && <AssetForm />}
    {!showForm && <AllAssets />}
  </div>
)

const mapStateToProps = (state) => ({
  showForm: state.form.show
})

App = connect(
  mapStateToProps
)(App)
export default App