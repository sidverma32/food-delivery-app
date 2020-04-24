import React from 'react';
import { Router, Route } from 'react-router-dom';


import Navbar from '../components/Navbar';

import Home from '../screens/Home';


import Restaurants from '../components/Restaurants';
import MyRequests from '../components/MyRequests';

import PendingOrders from '../components/PendingOrders';
import InProgressOrders from '../components/InProgressOrders';
import DeliveredOrders from '../components/DeliveredOrders';
import Dashboard from "../screens/Dashboard";
import { createBrowserHistory } from 'history';
const customHistory = createBrowserHistory();

const CustomeRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />

            <Route path="/dashboard" component={Dashboard} />
            <Route path="/user/restaurants" component={Restaurants} />
            <Route path="/user/myrequests" component={MyRequests} />

            <Route path="/restaurant/pending" component={PendingOrders} />
            <Route path="/restaurant/inprogress" component={InProgressOrders} />
            <Route path="/restaurant/delivered" component={DeliveredOrders} />
        </div>
    </Router>
)

export default CustomeRoutes;