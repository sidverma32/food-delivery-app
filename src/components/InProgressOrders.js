import React, { Component } from "react";
import { Link } from 'react-router-dom';

class InProgressOrders extends Component {
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
            <div className="InProgressOrders Dashboard">
                <div className="tabs">
                    <Link className="link" to="/restaurant/pending">
                        <span >Pending</span>
                    </Link>
                    <Link className="link" to="/restaurant/inprogress">
                        <span >In Progress</span>
                    </Link>
                    <Link className="link" to="/restaurant/delivered">
                        <span >Delivered</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default InProgressOrders;