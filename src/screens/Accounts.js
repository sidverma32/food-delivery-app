import React, { Component } from "react";

class Accounts extends Component {
    constructor() {
        super();
        this.state = {
            isUser: true,
            isLogin: true,
        }
    }

    render() {

        return (
            <div className="Accounts">
                {/* <div className="tabs">
                    <span onClick={() => { this.setState({ isLogin: true }) }} > Log in</span>
                    <span onClick={() => { this.setState({ isLogin: false }) }} >Register</span>
                </div> */}

            </div>
        )
    }
}

export default Accounts;