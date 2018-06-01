import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import {
  Checkbox,
  RadioGroup,
  Select,
  TextField,
  Switch,
} from 'redux-form-material-ui';

class ContactForm extends React.Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className="simple-form">
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
              placeholder="Doe"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component={TextField}
              type="email"
              placeholder="john.doe@gmail.com"
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
          <label>Favorite Color</label>
          <div>
            <Field name="favoriteColor" component="select">
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </div>
        </div>
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
          <Button variant="raised" color="primary" type="submit" disabled={pristine || submitting}>
            Submit
        </Button>
          <Button variant="raised" color="secondary" type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
        </Button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(ContactForm)