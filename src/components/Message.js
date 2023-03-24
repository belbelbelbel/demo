import React, { Component } from "react";


class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "the lord is your light"
        }
    }
         changebutton() {
            this.setState ({
                message: "live long and suscribe"
            })
         }
    
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changebutton()}>subscribe me</button>
            </div>
        )
    }
}

export default Message