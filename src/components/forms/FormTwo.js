import React from 'react';
import WizardForm from './WizardForm';
import { connect } from 'react-redux';
import { addWizardValues } from '../../actions/form';

class FormTwo extends React.Component {

  submit = values => {
    this.props.addWizardValues(values);
  };

  render() {
    return <WizardForm onSubmit={this.submit} />
  }
}

const mapDispatchToProps = (dispatch) => ({
  addWizardValues: (values) => dispatch(addWizardValues(values))
});

export default connect(undefined, mapDispatchToProps)(FormTwo);