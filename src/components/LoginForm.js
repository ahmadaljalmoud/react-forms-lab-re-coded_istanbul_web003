import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      // this is useful
      [event.target.name]: event.target.value
    })
    console.log("hande Change", this.state)
  }

  // card - how to call a function passed down in props only if the form
  // fields aren't empty?
  handleSubmit = event => {
    event.preventDefault()
    console.log("state", this.state)
    // how to do not equal in js? is it one or two or three equals?
    // it's username here to be consistent with the name property in the input element
    if (this.state.username !== '' && this.state.password !== '') {
      // do you need to add parentheses when calling this function that was passed down in props?
      // this was actually one arguemnt of an object, not two
      this.props.handleLogin(this.state)
    }
  };
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          Username
            <input id="username" name="username" type="text" onChange={this.handleChange} />
        </label>
      </div>
      <div>
        <label>
          Password
            <input id="password" name="password" type="password" onChange={this.handleChange} />
        </label>
      </div>
      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
  );
}


export default LoginForm;
