import React from 'react';
import { addAsset } from '../actions';
import { connect } from 'react-redux';
import FormInput from '../components/FormInput';

class AssetForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      latitude: '',
      longitude: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    event.preventDefault()
    this.props.dispatch(addAsset(this.state))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <FormInput
            name="name"
            value={this.state.name}
            handleInputChange={this.handleInputChange} />
          <FormInput
            name="description"
            value={this.state.description}
            handleInputChange={this.handleInputChange} />
          <FormInput
            name="latitude"
            value={this.state.latitude}
            handleInputChange={this.handleInputChange} />
          <FormInput
            name="longitude"
            value={this.state.longitude}
            handleInputChange={this.handleInputChange} />
          <div className="field is-horizontal">
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary">
                    Save Asset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
AssetForm = connect()(AssetForm)
export default AssetForm