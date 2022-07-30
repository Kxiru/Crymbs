import logo from './crymbs.png';
import './App.css';
import {useState} from 'react';
import {GetUsername, MyInventory} from './Actions'
import './reducers';


// function DisplayHandler(props) {
//   console.log(props.username);

//   if (!props.isLoggedIn) {
//     return <GetUsername
//             username={props.username}
//             setLoginStatus={props.setLoginStatus}
//             setUsername={props.setUsername}
//           />
//   } else {
//     return <div>Test</div>;
//   }
// }

function App() {
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Welcome to Crymbs </p>
      </header>
      <body>
        <div className="UserStats">Your Username: {username}</div>

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
                {/* <DisplayHandler isLoggedIn={isLoggedIn}/> */}
              </td>
              <td className="table-tab">creation</td>
            </tr>
          </tbody>
        </table>

      </body>
    </div>
  );
}

export default App;
