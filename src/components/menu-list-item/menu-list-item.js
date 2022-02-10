import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem;
    const categoryImg = `/img/${category}.png`
    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
                <img className="menu__category__logo" src={categoryImg} alt={category}></img>
            </li>
    )
}

export default MenuListItem;