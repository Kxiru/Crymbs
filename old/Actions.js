import {useState} from 'react';
// import ReactDOM from 'react-dom/client';

export function GetUsername(props) {
    return (
      <form onSubmit={props.setLoginStatus(true)}>
        <label>Enter your name:
          <input
            type="text" 
            defaultValue={""}
            onChange={(e) => props.setUsername(e.target.defaultValue)}
          />
        </label>
          <input type="submit"/>
      </form>
    )
  }

//   export function MyInventory() {
//     const [name, setName] = useState("");
  
//     return (
//       <form>
//         <label>Enter your name:
//           <input
//             type="text" 
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//       </form>
//     )
//   }

// async function welcomeInit() {
//     const name = prompt('What is your name? ');
//     console.log(`-> ${name} steps their way into the wilderness.`);
    
//     // await sleep(10000);
//     console.log("-> You shift your backpack over your shoulder. Your adventure begins.\n");
// }

// function playerChoice() {
//     console.log("You see...");
//     playerMenu();
//     var playerAnswer = prompt('->What is your choice? Please input as a Number:\n');

//     switch(playerAnswer){
//         case 1:
//             console.log("You chose to travel North...")
//         case 2:
//             console.log("You chose to travel East...")
//         case 3:
//             console.log("You chose to travel South...")
//         case 4:
//             console.log("You chose to travel West...")
//         case 5:
//             console.log("You chose to view your inventory.")
//         case 6:
//             console.log("You chose to enter creative mode.")
//         case 7:
//             return 7
//         default:
//             "Please try again."
//     }

//     return playerAnswer;
// }

// function playerMenu(){
//     console.log("\nPlease select from the following options:");
//     console.log("1) Move North,\n2) Move East,\n3) Move South,\n4) Move West,\n5) View Inventory,\n6) Enter Recipe Mode,\n7) Quit.\n")
// }

// function endProtocol() {
//     console.log("Thank you for playing!");
//     process.exit(1);
// }

// function sleep(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }