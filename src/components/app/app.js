import React from 'react';
import {CartPage, MainPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import {Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route path='/' exact component={() => <div className="menu__list"></div>}/>
                <Route path='/menu' component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </div>
    )
}

export default App;