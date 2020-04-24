import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            orderedItem: new URLSearchParams(window.location.search)
        }

        this.search = this.search.bind(this);
    }

    search() {

    }

    render() {
        return (
            <div className="Dashboard">
                <div className="tabs">
                    Browse more restaurants by clicking here
                    <Link className="link" to="/restaurants">
                        <span onClick={() => { this.setState({ isLogin: true }) }}>Restaurants</span>
                    </Link>

                </div>
                <div className="tabs">
                    Your Order has been added <span className="chips">{this.state.orderedItem.get('name')}</span>. Please check the status here <Link className="link" to="/user/myrequests">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>My Requests</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Dashboard;