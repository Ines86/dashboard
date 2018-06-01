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

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="wizard">
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={TextField}
            type="text"
            placeholder="John"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={TextField}
            type="text"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <Button variant="raised" color="primary" type="submit" className="next">Next</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard',                 
  destroyOnUnmount: false,        
  forceUnregisterOnUnmount: true,  
  validate
})(WizardFormFirstPage)