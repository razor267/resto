import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from "../hoc";
import {addedToCard, menuError, menuLoaded, menuRequested} from "../../actions";
import './menu-list.scss';
import Spinner from "../spinner";
import Error from "../error";

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuError())
    }

    render() {
        const {menuItems, loading, error, addedToCard} = this.props;

        if (error) {
            return <Error/>
        }

        if (loading) {
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem
                            key={menuItem.id}
                            menuItem={menuItem}
                            onAddToCard={() => addedToCard(menuItem.id, menuItem.price)}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCard,
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));