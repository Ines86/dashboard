import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';

class WizardForm extends Component {
    state = {
      page: 1
    }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  };

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
      {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
      {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} />}
      {page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit} />}
    </div>
    )
  }
}

export default WizardForm;