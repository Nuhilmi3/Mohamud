import React from "react";

class Timer extends React.Component {
    constructor(props){
        super();
        this.state = {seconds: 0};

    }

    tick(){
        this.setState(state => ({
            seconds: state.seconds + 1
        }))
    }

    componentDidMount(){
        this.intervals = setInterval(() => this.tick(), 100);
            
        
    }
    componentWillUnmount(){
        clearInterval(this.interval);

    }
    render(){
        return(
            <p>Second: {this.state.seconds}</p>
        )
    }
}

export default Timer;