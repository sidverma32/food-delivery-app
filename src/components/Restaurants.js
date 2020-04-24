import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Thumbnail from './Thumbnail';
import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';
import restaurantResponse from "../services/Restaurants";

class Restaurants extends Component {
    constructor() {
        super();
        this.state = {
            data: restaurantResponse,
            filteredData: []
        }

        this.search = this.search.bind(this);
        this.filter = this.filter.bind(this);

    }

    search(ev) {
        const searchedTerm = ev.target.value;
        const newFilteredArray = this.state.data.filter(res => {
            return (JSON.stringify(res).toLocaleLowerCase()).match(searchedTerm.toLocaleLowerCase());
        });
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filteredData: newFilteredArray
        });
    }

    filter(filterTerm) {
        const newFilteredArray = this.state.data.filter(res => {
            return (JSON.stringify(res).toLocaleLowerCase()).match(filterTerm.toLocaleLowerCase());
        });
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filteredData: newFilteredArray
        });
    }


    render() {
        const restaurantListItem = this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data;
        return (
            <div className="Restaurants Dashboard">
                <div className="tabs">
                    <Link className="link" to="/user/restaurants">
                        <span onClick={() => { this.setState({ isLogin: true }) }}>Restaurants</span>
                    </Link>
                    <Link className="link" to="/user/myrequests">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>My Requests</span>
                    </Link>
                </div>
                <div className="searchbar">
                    <form >
                        <input type="text" placeholder="Search your favorite restaurant based on food categories, ratings etc" onChange={this.search} />

                    </form>
                </div>

                <div className="chips" id="chip-container" onClick={(e) => this.filter(e.target.id)}>
                    <span id="Biryani">Biryani</span>
                    <span id="Desserts">Desserts</span>
                    <span id="Fast Food">Fast Food</span>
                    <span id="Non-Veg">Non-Veg</span>
                    <span id="Buffet">Buffet</span>
                    <span id="Pizza">Pizza</span>
                    <span id="Pure Veg">Pure Veg</span>
                    <span id="Cafe">Cafe</span>
                </div>
                <div className="thumbnailList">
                    {
                        restaurantListItem.map((items, key) => (
                            <Thumbnail key={key} img={img1} title={items.restaurant_name} description={items.restaurant_description} metaData={items.menu_items} ratings={items.rating} category={items.category} />

                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Restaurants;