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
        locdesc:"The Chernobyl disaster occurred 36 years ago, and is widely regarded as one of the worst nuclear disasters in history. \n You can go North.",
        locNorth:"02",
    },
    {
        locationID:"02",
        name:"Abandoned Shack",
        locdesc:"Abandoned because the exclusion zone created by the Chernobyl disaster spans a radius of 30km! And radiation from the disaster can be detected as far as 150,000km away in Belarus!! \n You can go South",
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
        curLoc: props.curLoc,
      };
    }

    render() {
        return(
            <GetLocation curLoc={this.props.curLoc} />
        )
    }
}

export function Loc1(){
    return <div>
        <div>Current Location: {Locations[0].name}</div>
        <div>{Locations[0].locdesc}</div>
    </div>
}

export function Loc2(){
    return <div>
        <div>Current Location: {Locations[1].name}</div>
        <div>{Locations[1].locdesc}</div>
    </div>
}

export function GetLocation(props){
    if (props.curLoc == "01") {
        return <Loc1 />;
    } else if (props.curLoc == "02"){
        return <Loc2 />;
    } else {
        return <div>Can't find you.</div>
    }
}