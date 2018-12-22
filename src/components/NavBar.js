import React from "react";

function NavBar() {
    return (
        <div>
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <h1 className="navbar-text">Welcome to Clicky!</h1>
            <div className="">
             <h2 className="navbar-text">
                Score: X | Top Score: X
            </h2>
            </div>
        </nav>
        </div>
    );
}

export default NavBar;