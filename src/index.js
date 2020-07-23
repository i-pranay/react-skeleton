import Layout from "./layout";
import React from "react";
import ReactDOM from "react-dom";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Layout />, wrapper) : false;
