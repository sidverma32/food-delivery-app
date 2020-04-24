import React, { Component } from "react";
import restaurantLists from "../services/RestaurantLists";
import AutoComplete from "../commons/AutoComplete";

//const axios = require('axios');
class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: restaurantLists
        }
    }
    search(event) {

        // // Make a request for a user with a given ID
        // axios.get('https://demo5427630.mockable.io/getResaturantsData')
        //     .then(function (response) {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed
        //     });
    }
    render() {

        return (
            <div className="Home">
                <div className="container">
                    <div className="inHomeContainer">
                        <h1>One stop for all <span className="your">your</span> <span className="cravings">cravings</span></h1>

                        <AutoComplete suggestionLists={restaurantLists} />

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;