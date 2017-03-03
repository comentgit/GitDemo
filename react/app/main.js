/**
 * Created by hemingming on 2017/3/3.
 */
import React from "react";
import ReactDom from "react-dom";
import Hello from "./hello/hello.jsx";
import "../css/index.less"

ReactDom.render(
  <Hello/>,
    document.getElementById("content")
);