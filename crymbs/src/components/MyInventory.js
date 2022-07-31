import React, { useEffect, useState } from "react";
 
export default function InventoryList(props) {
 const [InventoryItems, setInventoryItems] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getInventoryItems() {
     const response = await fetch(`http://localhost:5000/inventoryItems/`, {username:props.loggedInUsername});
    
     if (!response.ok) {
       console.log(`An error occurred: ${response.statusText}`);
       return;
     }
 
     const records = await response.json();
     setInventoryItems(records);
   }
 
   getInventoryItems();
 
   return;
 }, [InventoryItems.length]);
 
 // This method will map out the records on the table
 function inventoryList() {
    // console.log(InventoryItems);
   return InventoryItems.map((item) => {
     return (
       <InventoryItem
         inventList={item.Inventory}
         key={item._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <table className="table table-striped" style={{ textAlign:"center" }}>
       <thead>
         <tr>
           <th>ID</th>
           <th>Name</th>
         </tr>
       </thead>
       <tbody>{inventoryList()}</tbody>
     </table>
   </div>
 );
}

const InventoryItem = (props) => (
    <tr>
      <td>{props.key}</td>
      <td>{props.inventList}</td>
    </tr>
);