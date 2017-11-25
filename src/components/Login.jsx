import {Component, React} from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <form method='post'>
          <span>Email:</span>
          <input type='email' name='email' required=true />
          <br />
          <span>Password:</span>
          <input type='password' name='password' required=true />
          <br />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
