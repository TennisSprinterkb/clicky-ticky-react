import React from "react";

function Header(props){
    return<div className="header" status={props.status}>{props.children}</div>;
}

export default Header;