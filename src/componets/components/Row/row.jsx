import React, { Component } from 'react';
import Likes from '../likes/likes'
import Description from '../desription/desription'
import "bootstrap/dist/css/bootstrap.css";
class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr>
        <td className="text-capitalize text-center">
          <h5>{this.props.tweet.name}</h5>
        </td>
        <td className="text-dark bg bg-info">
          <Likes increment={this.props.increment} id={this.props.id}>
            <span className="my-auto">{this.props.tweet.likes}</span>
          </Likes>
        </td>
        <td>
          <Description
            val={this.props.tweet.tweet}
            onEdit={this.props.change}
          />
        </td>
        <td>{this.props.children}</td>
      </tr>
    );
  }
}

export default Row;
