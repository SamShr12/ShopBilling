import React from "react";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

const Body = () => {
    return(
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Dashboard />
            </div>
        </div>
    )
}

export default Body