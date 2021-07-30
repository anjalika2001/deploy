import React, { Component } from "react";
import Game from "./SCP.json";

const games = Game.map(
    (Game) => 
    {
        return(
    <div id="">        
<div className="cover-container d-flex h-100  mx-auto flex-column">
<div className="d-flex justify-content-center flex-column flex-md-row align-items-center my-3 bg-white border-bottom box-shadow">
<div >

    <div className="body  ">
    <div className="bor">
    <div className="box">
        <div className="img1">
    <img className="img1 " style={{ width:"100%", objectFit:"cover"}} src={Game.image} alt={Game.game} /> </div>
</div></div>
<code><h1 className="text-dark mx-5 mt-5" style={{display:"inline-flex",  justifyContent:"center", }}><strong>{Game.item}</strong></h1></code>
</div>




<br></br>
<div className="zoom">
<img className="shadow mx-5 mb-5" style={{float:"right", position:"inline",width:"40%"}} src={Game.image} alt={Game.game} />
</div>


<p className="card-text mx-5 mb-3" style={{width:"55%"}}>{Game["special containment procedures"]}</p>
                            <p className="card-text mx-5 mb-5" style={{width:"55%"}}>{Game.description}</p>

</div>
</div>
<br></br>
</div>
</div>

        );
    }
);

class Content extends Component {
    render() {
        return (
            
            <div className="album py-1 body ">
            <div className="container p-1  ">
            

                {games}

            </div>
            </div>
          
            
        );
    }
}

export default Content;
