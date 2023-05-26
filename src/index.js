import React from 'react';
import  ReactDOM  from 'react-dom/client';

import "./style.css"

import Welcome from './App';
import Demo from './Components';
import Items from "./images"
import Movies from './props';
import Products from './cards';
import Comments from './Comments'

import UseState from './UseState/UseState'

import Arrays from './UseState/arrays';
import Toggle from './UseState/toggle';


// const Welcome=()=>{
//     return <h1> Welcome React</h1>
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Welcome/>
);

const comp = ReactDOM.createRoot(document.getElementById("component"));
comp.render(
    <Demo/>
  
);


// images 

const img_root = ReactDOM.createRoot(document.getElementById("images"));

img_root.render(
    <Items/>
);


// Movies props

        // const movies_root = ReactDOM.createRoot(document.getElementById("props"));
        // movies_root.render(
        //     <Movies/>
        //  )

// cards

        //const card_root = ReactDOM.createRoot(document.getElementById("cards"));

        // card_root.render(
        //     <Products/>
        // );


// Comments 

        // const Comment_root = ReactDOM.createRoot(document.getElementById("comments"));
        // Comment_root.render(
        //     <Comments/>
        // )


// Use State

const useStateRoot =  ReactDOM.createRoot(document.getElementById("usestate"));
useStateRoot.render(
    <UseState />
)

// Arrays
const arrayRoot = ReactDOM.createRoot(document.getElementById('items'))
arrayRoot.render (
    <Arrays/>
)

// toggle

const Toggleroot = ReactDOM.createRoot(document.getElementById('toggle'))
Toggleroot.render(
    <Toggle></Toggle>
)