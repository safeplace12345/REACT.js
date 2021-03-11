import React, { useState } from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Likes extends Component {
    constructor(props) {
        super(props);
        this.state = { like: props.likes }
    }
    render() { 
        return ( <button 
        onClick={() => {this.props.increment(this.props.id)}} className="btn btn-primary">
            Like _{this.props.children}
        </button> );
    }
}
 
export default Likes;