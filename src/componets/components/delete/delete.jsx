import React, { useState } from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class Delete extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="btn btn-danger"
        onClick={() => {
          this.props.delete(this.props.id);
        }}
      >
        Delete Tweet
      </button>
    );
  }
}
