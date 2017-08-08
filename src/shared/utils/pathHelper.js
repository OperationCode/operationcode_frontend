class MyApp extends React.Component {

  getChildContext() {
    return {
      username: this.state.username
    }
  }

}

MyApp.childContextTypes = {
  username: React.PropTypes.object
}

const username = (props, context) => (
  <div>{context.username}</div>
)

username.contextTypes = {
  username: React.PropTypes.object
}
