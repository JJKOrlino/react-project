import React, { Component } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => this.setState( { 
    [e.target.name]: e.target.value, error: "" 
  });

  Login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
      if (!username || !password) {
        return this.setState({ error: "Please fill in the blank" });
    }
      this.props.context.this(username, password)
        .then((loggedIn) => {
          if (!loggedIn) {
            this.setState({ error: "Incorrect Username or Password" });
          }
        })
  };

  render() {
    return !this.props.context.user ? (
      <>
      <div>
        <h3 className="title">
          <center>Please Enter Your Login</center>
        </h3>
      </div>
        <form onSubmit={this.login}>
          <div>
            <center>
              <div className="column is-one-third">
                <div className="field">
                  <label className="label">
                    Email: 
                  </label>
                  <input
                    type="email"
                    className="input"
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <label className="label">Password: </label>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.error && (
                  <div className="has-text-danger">{this.state.error}</div>
                )}
                <div className="field is-clearfix">
                  <button
                    className="button is-primary is-outlined is-pulled-right"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </center>
          </div>
        </form>
      </>
    ) : (
      <Redirect to="/products" />
    );
  }
}

export default withContext(Login);
