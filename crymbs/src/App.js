import logo from './crymbs.png';
import './App.css';
import GetUserCredentials from './Actions';
import {useState} from 'react';
// import {GetUsername, MyInventory} from './Actions'



function App() {
  const [username, setUsername] = useState("");
  const [walletID, setWalletID] = useState("");
  const [signedIn, setLoginStatus] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Welcome to Crymbs </p>
      </header>
      <body>
        <div className="UserStats">Your Username: {username} : {walletID}</div>

        <table>
          <thead>
            <tr>
              <th className="yourHistory">
                YOUR HISTORY
              </th>
              <th>
                YOUR INVENTORY
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="header-row">
              <td className="table-tab">
                
              </td>
              <td className="table-tab">
                In your inventory, you have...
                {/* <MyInventory/> */}
              </td>
            </tr>
            <tr>
              <td className="table-tab">
                <LoginDecisionHandler
                  setUsername={setUsername}
                  setWalletID={setWalletID}
                  signedIn={signedIn}
                  setLoginStatus={setLoginStatus}
                />
              </td>
              <td className="table-tab">creation</td>
            </tr>
          </tbody>
        </table>

      </body>
    </div>
  );
}

function LoginDecisionHandler(props) {
  if(!props.signedIn){
    return (
      <GetUserCredentials className="dispGetUsername"
        setUsername={props.setUsername}
        setWalletID={props.setWalletID}
        signedIn={props.signedIn}
        setLoginStatus={props.setLoginStatus}
      />
    )
  } else {
    return (
      <div>test</div>
    )
  }
}

export default App;
