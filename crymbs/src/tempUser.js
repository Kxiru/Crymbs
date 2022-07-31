import React from 'react';

let Users = [
    {   user: "Keiru",
        curLocation:"01",
        inventory:["[Empty]","[Empty]","[Empty]","[Empty]","[Empty]"],
    },
]

let Locations = [
    {
        locationID:"01",
        name:"Chernobyl",
        locdesc:"The Chernobyl disaster occurred 36 years ago, and is widely regarded as one of the worst nuclear disasters in history.",
        locNorth:"02",
    },
    {
        locationID:"02",
        name:"Abandoned Shack",
        locdesc:"Abandoned because the exclusion zone created by the Chernobyl disaster spans a radius of 30km! And radiation from the disaster can be detected as far as 150,000km away in Belarus!!",
        locSouth:"01",
    }
]

export class GetInventory extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: props.username,
      };
    }

    render() {

        return (
            <div>{Users[0].inventory.map((user) => <ol>{user}</ol>)}</div>
        );
    }
}

export class BeginGame extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: props.username,
      };
    }

    render() {

        return (
            <div>{Users[0].inventory.map((user) => <ol>{user}</ol>)}</div>
        );
    }
}