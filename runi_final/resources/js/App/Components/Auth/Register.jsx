import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText,  } from 'reactstrap';
// import Navigation from '../Layout/Navigation';


export default class Register extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
      name : '',
      email: '',
      password: '',
      c_password: '',
    }
  }

    handleNameChange = (event) => {
      this.setState({
        name: event.target.value
      });
    }
    handleEmailChange = (event) => {
      this.setState({
          email: event.target.value
      });
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handlePasswordChangeConformation = (event) => {
      this.setState({
        c_password: event.target.value
      });

      // Password validation needs to be fixed
      if (this.state.password !== this.state.c_password) {
        console.log("Passwords don't match");
    } else {
      console.log("they match");
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();



    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            c_password: this.state.c_password

        })
    })
    .then(response => response.json())
    .then(data => {

    })
}
    render() {
        return (
          <>
          {/* <Navigation/> */}
           <h1>Please Register</h1>
           <Form action="" method="post" onSubmit={this.handleFormSubmit}>
             <FormGroup>
              <Label htmlFor="register_name">Name</Label>
               <Input type="text" name="register_name" value={this.state.name}
               onChange={this.handleNameChange}
               placeholder="Enter Your Name" id="register_name"/>
             </FormGroup>
             <FormGroup>
             <Label htmlFor="register_name">Email</Label>
             <Input type="email" name="register_email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Your Email" id="register_email"/>
             </FormGroup>
             <FormGroup>
             <Label htmlFor="register_password">Password</Label>
             <Input type="password" name="register_password" value={this.password} onChange={this.handlePasswordChange} placeholder="Enter Your Password" id="register_password"/>
             </FormGroup>
             <FormGroup>
             <Label htmlFor="register_password_confirm">Confirm Password</Label>
             <Input type="password" name="register_password_confirmation" value={this.passwordConformation} onChange={this.handlePasswordChangeConformation}  placeholder="Confirm Your Password" id="register_password_confirmation"/>
             </FormGroup>

               {/* Need to add on change - if submit success */}
               {/* Is not sended to database */}

                 <Button type="submit" value="Submit" color="danger">Submit</Button>
                 <Link to="/login">Login</Link>
           </Form>
          </>

        )
    }
}
