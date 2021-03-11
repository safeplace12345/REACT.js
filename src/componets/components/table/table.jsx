import React, { useState } from "react";
import { Component } from "react";
import "./table.css";
import { Delete } from "../delete/delete";
import 'bootstrap/dist/css/bootstrap.css'
import Row from '../Row/row'
export class NewTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { id: 0, likes: 1, name: "John", tweet: "lorem lorem l,rem lorem " },
        { id: 1, likes: 0, name: "ghost", tweet: "lorem lore " },

        { id: 2, likes: 3, name: "james", tweet: "lorem lorem " },
        {
          id: 3,
          likes: 5,
          name: "esther",
          tweet: "lorem lorem lorem lorem lorem ",
        },
      ],
    };
  }
  handleIncrement = (tweet) => {
    const arr = [...this.state.arr];
    const index = arr.indexOf(tweet);
    arr[index].likes += 1;
    this.setState({ arr });
  };
  handleDelete = (tweetId) => {
    const arr = this.state.arr.filter(({ id }) => id !== tweetId);
    // this.setState({arr : arr})
    this.setState({ arr });
  };
  // storage(array) {
  //   if (localStorage) {
  //     localStorage.setItem("tweets", JSON.stringify(this.state.arr));
  //   }
  //   console.log(localStorage.getItem("tweets"));
  // }
  // componentDidMount(){
  //   this.storage()
  // }
  render() {
    return (
      <table className="col-10 table table-hover ">
        <thead>
          <tr>
            <th className="text-center">Author</th>
            <th className="text-center">Likes</th>
            <th className="text-center">Tweets</th>
            <th className="text-center">Delete Tweets</th>
          </tr>
        </thead>
        <tbody>
          {this.state.arr.map((tweet) => {
            return (
              <Row
                key={tweet.id}
                tweet={tweet}
                increment={this.handleIncrement}
                id={tweet}
              >
                <Delete
                  delete={this.handleDelete}
                  id={tweet.id}
                />
              </Row>
            );
          })}
        </tbody>
      </table>
    );
  }
}



// function Row(props) {
  //   return (
//     <tr>
//       <td>{props.name}</td>
//       <td className=" bg bg-dark d-flex justify-content-between">
//         <Likes increment={this.props.increment}></Likes><span className="my-auto">{props.likes}</span>
//       </td>
//       <td>
//         <input type="text" defaultValue={props.tweet} />
//       </td>
//       <td>{props.children}</td>
//     </tr>
//   );
// export const Table = () => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Author</th>
//           <th>Tweets</th>
//           <th>Description</th>
//           <th>Add Tweet</th>
//         </tr>
//       </thead>
//       <tbody>
//         {arr.map((tweet) => {
//           return (
//             <Row
//               name={tweet.name}
//               likes={tweet.likes}
//               tweet={tweet.tweet}
//               key={tweet.id}
//             >
//               <State likes={tweet.likes}>{tweet.tweet}</State>
//             </Row>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };
// }