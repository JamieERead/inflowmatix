import React from 'react';
import { saveAsset, cancelAsset } from '../actions';
import { connect } from 'react-redux';
import FormInput from '../components/FormInput';
import SubmitButtons from '../components/SubmitButtons';

class AssetForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      latitude: '',
      longitude: '',
      submitted: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    // validation check
    const name = this.state.name.trim();
    const description = this.state.description.trim();
    const latitude = this.state.latitude.trim();
    const longitude = this.state.longitude.trim(); 
    let valid = name && description && latitude && longitude;

    if(!valid) {
      this.setState({
        name: name,
        description: description,
        latitude: latitude,
        longitude: longitude,
        submitted: true
      })
      return;
    }

    this.props.dispatch(saveAsset(this.state));
  }

  handleFormCancel() {
    this.props.dispatch(cancelAsset());
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <form onSubmit={this.handleFormSubmit} className="box">
            <FormInput
              name="name"
              submitted={this.state.submitted}
              value={this.state.name}
              placeholder="Type the asset name"
              handleInputChange={this.handleInputChange} />
            <FormInput
              name="description"
              submitted={this.state.submitted}
              value={this.state.description}
              placeholder="Description or condition of asset"
              handleInputChange={this.handleInputChange} />
            <FormInput
              name="latitude"
              submitted={this.state.submitted}
              value={this.state.latitude}
              placeholder="lat coordinate"
              handleInputChange={this.handleInputChange} />
            <FormInput
              name="longitude"
              submitted={this.state.submitted}
              value={this.state.longitude}
              placeholder="long coordinate"
              handleInputChange={this.handleInputChange} />
            <SubmitButtons handleFormCancel={this.handleFormCancel} />
          </form>
        </div>
      </div>
    )
  }
}
AssetForm = connect()(AssetForm)
export default AssetForm