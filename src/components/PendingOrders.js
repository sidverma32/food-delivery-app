import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PendingOrders extends Component {
    constructor() {
        super();
        this.state = {

        }

    }
    render() {
        return (
            <div className="PendingOrders Dashboard">
                <div className="tabs">
                    <Link className="link" to="/restaurant/pending">
                        <span>Pending</span>
                    </Link>
                    <Link className="link" to="/restaurant/inprogress">
                        <span>In Progress</span>
                    </Link>
                    <Link className="link" to="/restaurant/delivered">
                        <span>Delivered</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PendingOrders;