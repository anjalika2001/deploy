import React from "react";

const Navbar=({scp}) =>
   {
        return(
            <nav className="navbar navbar-inverse  navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">SCP</a>
                    </div>
                   
                    <div className="collapse navbar-collapse" id="example-navbar-collapse-1">
                        <ul className="nav navbar-nav ">
                            <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
                            <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">SCP Files <span className="caret"></span></a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {
                                scp.map(
                                    (scp) => (
                                        <li><a className="dropdown-item" href={'#'+scp.item}>{scp.item}</a></li>
                                        )
                                    )
                                }
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
             
        );
   }
export default Navbar;