import React from "react";
import '../App.css'
function Navbar(){
    return(
        <>
        <header>
        <img  src="../../mylogo.gif" alt="logo" width='150px'/>
        <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#grp4">Group 4</a></li>
            <li><a href="#grp5">Group 5</a></li>
        </ul>
        </header>
        </>
    )
}


export default Navbar;