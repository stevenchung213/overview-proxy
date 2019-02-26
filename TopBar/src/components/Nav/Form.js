import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


export default class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form id={this.props.id} >
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            className='form-details'
            id={this.props.secondId}
          />
          <FormControl.Feedback />
      </form>
    );
  }
}
