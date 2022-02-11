import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const AppHeader = ({total}) => {
    debugger
    return (
        <header className="header">
            <Link to='/menu'>
                <div className="header__link">
                    Menu
                </div>
            </Link>
            <Link to='/cart'>
                <div className="header__link">
                    <img className="header__cart" src={cartIcon} alt="cart"></img>
                    Total: {total} $
                </div>
            </Link>
        </header>
    )
};

const mapStateToProps = ({total}) => {
    return {
        total
    }
};

export default connect(mapStateToProps)(AppHeader);