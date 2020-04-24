import React, { Component } from "react";
import { Link } from 'react-router-dom';

import MyRequestsList from './MyRequestsList';

class MyRequests extends Component {
    constructor() {
        super();
        this.state = {

        }

        this.search = this.search.bind(this);
    }

    search() {

    }

    render() {
        return (
            <div className="MyRequests Dashboard">
                <div className="tabs">
                    <Link className="link" to="/user/restaurants">
                        <span>Restaurants</span>
                    </Link>
                    <Link className="link" to="/user/myrequests">
                        <span>My Requests</span>
                    </Link>
                </div>
                <div className="myRequestsList">
                    <h2>Track your orders</h2>
                    <MyRequestsList orderNum={"545146817"} title={"Pizza"} quantity={"2"} status={"In Process"} total={"1,580"} rating={4} />
                    <MyRequestsList orderNum={"5462161826"} title={"Cake"} quantity={"1"} status={"Pending"} total={"600"} rating={3.5} />
                    <MyRequestsList orderNum={"545146817"} title={"Pizza"} quantity={"2"} status={"In Process"} total={"1,580"} rating={3.8} />
                    <MyRequestsList orderNum={"5462161826"} title={"Cake"} quantity={"1"} status={"Pending"} total={"600"} rating={4.3} />
                    <MyRequestsList orderNum={"545146817"} title={"Pizza"} quantity={"2"} status={"In Process"} total={"1,580"} rating={4.5} />
                    <MyRequestsList orderNum={"5462161826"} title={"Cake"} quantity={"1"} status={"Pending"} total={"600"} rating={4.7} />
                </div>
            </div>
        )
    }
}

export default MyRequests;