import { connect } from 'react-redux';
import Login from './login'
import { addEmail, addPassword } from '../../state/login/actions'

const mapStatetoProps = null;

const mapDispatchToProps = dispatch => {
  return {
    addEmail: email => {
      dispatch(addEmail(email))
    },
    addPassword: password => {
      dispatch(addPassword(password))
    }
  }
}

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default loginContainer
