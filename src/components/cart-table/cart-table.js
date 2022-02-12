import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {deleteFromCard, resetItems} from "../../actions";
import {postData} from "../../services/resto-service";

const CartTable = ({items, deleteFromCard, resetItems}) => {

    const sendOrder = (items) => {
        postData('http://localhost:3000/requests', JSON.stringify(items))
            .then(data => {
                console.log(`Заказ отправлен. Содежримое заказа:`);
                console.log(data);
                resetItems();
            }).catch(() => console.log('ERROR'))
    }

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div
                                    className="cart__item-price">{price}$ {count > 1 ? `x ${count} units = ${price * count}$` : null}</div>
                                <div onClick={() => deleteFromCard(id, price)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => sendOrder(items)} className="cart__btn">Send order</button>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCard,
    resetItems
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);