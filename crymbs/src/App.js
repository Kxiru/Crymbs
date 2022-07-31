import logo from './crymbs.png';
import './App.css';
import {GetUserCredentials} from './components/GetUserCredentials';
import './components/MyInventory';
import InventoryList from './components/MyInventory';
import {useState, useEffect} from 'react';
import Web3 from 'web3';
// import InventoryList from './components/MyInventory';
import {GetInventory, BeginGame} from './tempUser';

function App() {
  const [username, setUsername] = useState("");
  const [walletID, setWalletID] = useState("");
  const [signedIn, setLoginStatus] = useState(false);
  // let [inventoryArray, setInventoryArray] = useState(["[Empty]","[Empty]","[Empty]","[Empty]","[Empty]"]);

  useEffect(()=>{
    const web3 = new Web3(Web3.givenProvider)

    async function loadAccounts(){
      const walletID = await web3.eth.requestAccounts();
      setWalletID(walletID[0])
    }
    loadAccounts()
  }, [walletID])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Welcome to Crymbs </p>
      </header>
      <body>
        <div className="UserStats">Your Username: {username} / Metamask ID: {walletID}</div>
        <br></br>
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
                <BeginGameDecisionHandler
                  signedIn={signedIn}
                  // inventoryArray={inventoryArray}
                  username={username}
                  // setInventoryArray={setInventoryArray}
                  />
              </td>
              <td className="table-tab">
                In your inventory, you have...
                <InventoryDecisionHandler
                signedIn={signedIn}
                // inventoryArray={inventoryArray}
                username={username}
                // setInventoryArray={setInventoryArray}
                />
              </td>
            </tr>
            <tr>
              <td className="table-tab">
                <LoginDecisionHandler
                  setUsername={setUsername}
                  //setWalletID={setWalletID}
                  signedIn={signedIn}
                  setLoginStatus={setLoginStatus}
                />
              </td>
              <td className="table-tab">ALCHEMY WINDOW</td>
            </tr>
          </tbody>
        </table>

      </body>
    </div>
  );
}

function InventoryDecisionHandler(props){
  if(props.signedIn){
    return(
      <GetInventory
        // inventoryArray={props.inventoryArray}
        username={props.username}
        // setInventoryArray={props.setInventoryArray}
      />
    )
  } else {
    return (
      <div>Nothing! Sign in!</div>
    )
  }
}

function LoginDecisionHandler(props) {
  if(!props.signedIn){
    return (
      <GetUserCredentials 
        setUsername={props.setUsername}
        //setWalletID={props.setWalletID}
        signedIn={props.signedIn}
        setLoginStatus={props.setLoginStatus}
      />
    )
  } else {
    return (
      <div>
        What choice will you make?
          <br></br>
          <input className="choiceButton" type="button" value="Go North"></input>
          <input className="choiceButton" type="button" value="Go South"></input>
          <input className="choiceButton" type="button" value="Pick up Item"></input>
          <input className="choiceButton" type="button" value="Create Item"></input>
      </div>
    )
  }
}

function BeginGameDecisionHandler(props){
  if(props.signedIn){
    return(
      <BeginGame
        username={props.username}
      />
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default App;
