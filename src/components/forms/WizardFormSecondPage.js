import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import {
  Checkbox,
  RadioGroup,
  Select,
  TextField,
  Switch,
} from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const WizardFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit} className="wizard">
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={TextField}
            type="email"
            placeholder="john.smith@gmail.com"
          />
        </div>
      </div>
      <div className="radio-buttons">
        <label>Sex</label>
        <label>
          <Field
            name="sex"
            component="input"
            type="radio"
            value="male"
          />{' '}
          Male
          </label>
        <label>
          <Field
            name="sex"
            component="input"
            type="radio"
            value="female"
          />{' '}
          Female
          </label>
      </div>
      <div>
        <Button variant="raised" color="primary" type="button" className="previous" onClick={previousPage}>Previous</Button>
        <Button variant="raised" color="secondary" type="submit" className="next">Next</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard',  
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, 
  validate
})(WizardFormSecondPage)