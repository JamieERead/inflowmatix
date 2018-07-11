import { connect } from 'react-redux';
import AssetList from '../components/AssetList';

const mapStateToProps = (state) => ({
  assets: state.assets
})

export default connect(
  mapStateToProps
)(AssetList)