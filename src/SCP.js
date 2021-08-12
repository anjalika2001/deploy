import React, { Component } from "react";


const SCP=({scp}) =>
   {
        return(
            <div>
                <center><h2> SCP List</h2></center>
                {
                scp.map(
                    (scp) => (
                        <div className="row" >
                            <div className="col p-3 m-2 rounded border dropshadow ">
                                <h2>Item: <div class="card" >{scp.item}</div></h2>
                                <h3>Class: <div class="card" >{scp.class}</div></h3>
                                <h3>Containment</h3>
                                <p><div class="card" >{scp.containment}</div></p>
                                <h3>Description</h3>
                                <p><div class="card" >{scp.description}</div></p>
                                
                            </div>
                      </div>

                    )
                 )
                }
            </div>
        )
    }



export default SCP;
