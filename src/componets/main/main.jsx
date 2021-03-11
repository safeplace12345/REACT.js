import React , { useState } from 'react'
import { Component } from 'react';
import'./main.css'
import {NewTable} from '../components/table/table'
import 'bootstrap/dist/css/bootstrap.css'
// npm i bootstrap@whateverversion


const Main = () => {
   const [color,setColor] = useState(false)
   function changeColor(){
       setColor(!color)
       console.log(color)
   }
let classes = `btn btn-outline`;
classes += color ? '-dark' : '-light'
let text = color ?  'Dark mode' : 'Light mode';
    return(
        <main className={color ? 'red' : 'green'}>
           <NewTable ></NewTable>
           <button onClick={changeColor} className={classes}> {text}</button>
        </main>
    )
}
export default Main;
