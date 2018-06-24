import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form'
import {connect} from 'react-redux'
import {required, length} from 'redux-form-validators'
import { Input, CheckInput } from '../../components'
import {login} from '../../actions/user'

let Home = ({handleSubmit, termsCheckbox, invalid, loginUser}) => {
  const handleLogin = values => {
    loginUser(values);
  }
  console.log(termsCheckbox);
  return (
    <div className="display-flex">
      <img
        src="https://placehold.it/200x200"
        alt=""
        className='flex-3'
      />

    <form className="flex-1"  onSubmit={handleSubmit(handleLogin)}>
      <Field
        name='username'
        component={Input}
      label='Your name'
    type='text'
    validate={[required()]}/>
    <Field
      name='password'
      component={Input}
    label='Your password'
  type='password'
validate={[required(), length({min: 8})]}/>
  <Field
    name='termsCheckbox'
    component={CheckInput}
  label='Agreement'
  type='checkbox'>I agree</Field>
<button type='submit' disabled={!termsCheckbox}>Submit</button>
    </form>
  </div>
)}

Home = reduxForm({
  form: 'LoginForm',
})(Home)
// const mapStateToProps = state => ({
//   todos:
// })
// const mapDispatchToProps = {}
//
// Home = connect(mapStateToProps, mapDispatchToProps)(Home)

Home = connect(state => ({
  termsCheckbox: formValueSelector('LoginForm')(state, 'termsCheckbox'),
      initialValues: {
        termsCheckbox: false,
        username: 'Michał'
      }
  }), {
    loginUser: login
  })(Home)

export default Home
