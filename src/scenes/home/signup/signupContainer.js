import { connect } from 'react-redux';
import SignUp from './signup'
import { addEmail, addPassword, addZip } from '../../state/registration/actions'

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    addEmail: email => {
      dispatch(addEmail(email))
    },
    addPassword: email => {
      dispatch(addPassword(password))
    },
    addZip: zip => {
      dispatch(addZip(zip))
    }
  }
}

const signupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

export default signupContainer
