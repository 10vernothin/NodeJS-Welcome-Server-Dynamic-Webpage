import React, { Component } from 'react';
/*
class Login extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      user: '',
	    pass: '',
	    errmsg: '',
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getErrMsg()
    .then(res => this.setState({ errmsg: res.express }))
    .catch(err => console.log(err));
  }

  // Retrieves the list of items from the Express app

  getErrMsg = async () => {
    const response = await fetch('/api/LoginPrompt');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  render() {
    const { _state } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          />
          <input
            type=""
            value={this.state.pass}
            onChange={e => this.setState({ user: e.target.pass })}
          />
          
        </form>
      </div>
    );
  }
}
*/

class Login extends Component {
  
  constructor(props){
      super(props);
      this.state = {
          formControls: {
              email: {
                value: ''
              },
              name: {
                value: ''
              },
              password: {
                value: ''
              }
          }
      }
    
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/LoginProcesser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      state: this.state,
    });
    const body = await response.text();
  };
  
  changeHandler = event => {
      
      const name = event.target.name;
      const value = event.target.value;
    
      this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
  }

  
   render() {
      return (
          <form>
              <title>Login</title>
              <div>
                Login
              </div>
              <input type="email" 
                     name="email" 
                     value={this.state.formControls.email.value} 
                     onChange={this.changeHandler} 
              />

              <input type="text" 
                     name="name" 
                     value={this.state.formControls.name.value} 
                     onChange={this.changeHandler} 
              />

              <input type="password" 
                     name="password" 
                     value={this.state.formControls.password.value} 
                     onChange={this.changeHandler} 
              />
          <button type="submit">Submit</button>
          </form>      
          
      );
  }

}

export default Login;

