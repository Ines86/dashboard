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

const WizardFormThirdPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="wizard">
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component={Checkbox}
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field
            name="notes"
            component={TextField}
          />
        </div>
      </div>
      <div>
        <Button variant="raised" color="primary" type="button" className="previous" onClick={previousPage}>Previous</Button>
        <Button variant="raised" color="secondary" type="submit" className="submit" disabled={pristine || submitting}>Submit</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  
  validate
})(WizardFormThirdPage)