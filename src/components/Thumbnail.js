import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

class Thumbnail extends Component {
    constructor() {
        super();
        this.state = {

        }

    }

    render() {
        return (
            <div className="Thumbnail">
                <div className="container">
                    <figure>
                        <div className="imgContainer">
                            <img src={this.props.img} alt="product image" />
                        </div>
                        <figcaption>
                            <div className="title">{this.props.title}</div>
                            <div className="description">{this.props.description}</div>
                        </figcaption>
                    </figure>
                    <div>
                        <b> Categories:</b>  <span>{this.props.category}</span>
                        <Link className="link" to={`/dashboard?name=${this.props.title}`}>
                            <p>
                                Order Now
                        </p>
                        </Link>
                        <p>
                            Rating: {this.props.ratings}
                            <Rating name="read-only" value={this.props.ratings} precision={0.2} readOnly />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Thumbnail;