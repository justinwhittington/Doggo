import React from "react";
import SideBar from "../SideBar";
import "./Wrapper.css";

const Wrapper = props => (
    <div id='Discover'>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'}/>
        <div className="wrapper" id='page-wrap'>{props.children}</div>
    </div>

);

export default Wrapper;
 