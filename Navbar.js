import React from "react";
// import {Link } from "react-router-dom"
// import "../App.css";

// function Navbar() {
//     return(
//         <div>
//             <ul>
//                 <li><Link to="/">Name</Link></li>
//                 <li><Link to="/Counter">Counter</Link></li>
//                 <li><Link to="/Forms">Forms</Link></li>
//                 <li><Link to="/Mycar">Mycar</Link></li>
//                 <li><Link to="/timer">Timer</Link></li>
//             </ul>
//         </div>
//     )
// }
// export default Navbar;



import { Link } from "react-router-dom";
import "../App.css";

function Navbar(){
    return(
        <div>
            <ul>
                <li><Link to="/">Name</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/Forms">Forms</Link></li>
                <li><Link to="/Mycar">My car</Link></li>
                <li><Link to="/timer">Timer</Link></li>

            </ul>
        </div>
    )
}
export default Navbar;