import React from "react";

class Login extends React.Component {
  state = {};
  //create handleclick and handlechange events.
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };

  //render login form with button onclick event.
  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <form>
          <small className="form-text text-muted">
                Welcome to the Self-love Memory Game!
                <br/>
                A memory game to remind you of your worth.
              </small>
              <br/>
              <br/>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.handleClick} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

//export code to be avalable outside this module.
export default Login;