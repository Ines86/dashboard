import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { addValues } from '../../actions/form';

class FormOne extends React.Component {

  submit = values => {
    this.props.addValues(values);
  };

  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}

const mapDispatchToProps = (dispatch) => ({
  addValues: (values) => dispatch(addValues(values))
});

export default connect(undefined, mapDispatchToProps)(FormOne);