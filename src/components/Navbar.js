import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isUser: false,
            isLoginClicked: false,
        }
    }

    render() {
        const { isUser, isLoginClicked } = this.state;
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" height={40} width={90} />
                        </Link>
                    </div>
                    <nav>
                        <Link className="link" to="userLogin" >
                            <span>Login</span>
                        </Link>

                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar;