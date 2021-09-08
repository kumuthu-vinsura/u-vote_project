import React from "react";
import "./Loading.css";
import logo from "./logo.png";

export default function Loading() {
    return(
        <div className="box">
            <div className="container">
                <img src={logo} alt="u_vote" />
                <h4>Every Vote Counts</h4>
            </div>
        </div>
    );
}