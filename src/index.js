//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

const name = "Salah";
const year = new Date().getFullYear();
//It should display 2 paragraph HTML elements.
ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
