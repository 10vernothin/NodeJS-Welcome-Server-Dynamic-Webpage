import React, { Component } from 'react';

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
          },
		  postResponse: ''
      }
    
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/login/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
	  body: JSON.stringify(this.state)
    });
    const body = await response.text();
    this.setState({ postResponse: body + "Hello"});
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
		  <form method="post" onSubmit={this.handleSubmit}>
              <title>Login</title>
				<div>Login
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
          <p>Response: {this.state.postResponse}</p>
          </form>      
          
      );
  }

}

export default Login;

