import React from 'react';

export class GetUserCredentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      walletID: props.walletID,
      signedIn: props.signedIn,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: document.getElementById("getuser").value});
    this.setState({walletID: document.getElementById("getwallet").value});
    this.setState({signedIn: true});
  }

  handleSubmit(event) {
    this.props.setUsername(this.state.username);
    this.props.setWalletID(this.state.walletID);
    this.props.setLoginStatus(this.state.signedIn);
    event.preventDefault();
  }

  render() {
    return (
      <form className="signupForm" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <br></br>
          <input type="text" id="getuser" value={this.state.username} onChange={this.handleChange} />
        </label>
        <br></br>
        <label>
          WalletID:
          <br></br>
          <input type="text" id="getwallet" value={this.state.walletID} onChange={this.handleChange} />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

