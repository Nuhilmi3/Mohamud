
import React, {useState} from "react";

// This is clas
// class Mycar extends React.Component {
//     constructor(props){
//         super();
//         this.state = {
//             brand: "fordkk,",
//             mode: "muzda,",
//             color: "Red",
//             year: 1988
//         };

//     }
//     render() {
//         return(
//             <p>My care is {this.state.brand} {this.state.mode} {this.state.year} and it's a {this.state.color}</p>
            
//         )
//     }

// }

// This is function
function Mycar() {
    const [mycar, setMycar] = useState({
            brand: "fordkk,",
            mode: "muzda,",
            color: "Red",
            year: 1988
        });

        return(
            <p>My care is {mycar.brand} {mycar.mode} {mycar.year} and it's {mycar.color}</p>
            
        )
    

}

export default Mycar;