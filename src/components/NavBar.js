import React from "react";

const NavBar = props => (
        <div>
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <h1 className="navbar-text">Welcome to Clicky!</h1>
            <div className="">
             <h2 className="navbar-text">
                Score: {props.score} | Top Score: {props.topscore}
            </h2>
            </div>
        </nav>
        </div>
)

export default NavBar;