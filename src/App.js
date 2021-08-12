import { render } from '@testing-library/react';
import React, {Component} from 'react';
import SCP from "./SCP.js";
import Navbar from './Nav.js';

class App extends Component
{
    render()
    {
      return(
          //display SCP component
          <div>
        < Navbar SCP scp={this.state.scp} ></Navbar>
        <SCP scp={this.state.scp}></SCP>
        <footer>
              <center>SCP Assigment </center>
            </footer>
        </div>
      );
    }
    
    state = { scp: []}

    componentDidMount()
    {
        //make a request to rest API 
        fetch('https://scpdb-02a9.restdb.io/rest/safe',
        {
            method: 'GET',
            headers:{
                "cache-control": "no-cache",
                "x-apikey": "6111f5b869fac573b50a53bc",
                "content-type": "application/json"
            }
        })
        //parse output to JSON
        .then(result => result.json())
        //set the json data into state 
        .then((data)=>{this.setState({scp:data})})
        // log any errors
        .catch(console.log);
    }
}

export default App;
    
