import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {deleteFromCard, isEmpty, isOrder, resetItems} from "../../actions";
import {postData} from "../../services/resto-service";

const CartTable = ({items, deleteFromCard, resetItems, isOrder, ordered, isEmpty, emptyCart}) => {

    if(items.length === 0) {
        isEmpty(true);
    }

    let btnClasses = "";
    let btnDisabled = null;
    if (emptyCart) {
        btnClasses = "cart__btn cart__btn__dis"
        btnDisabled = true;
    } else {
        btnClasses = "cart__btn"
        btnDisabled = false;
    }

    const ViewOrder = () => {
        if (ordered) {
            return (
                <>
                    Заказ успешно отправлен
                </>
            )
        } else {
            return (
                <>
                    Ваш заказ:
                </>
            )
        }
    }

    const sendOrder = (items) => {
        postData('http://localhost:3000/requests', JSON.stringify(items))
            .then(data => {
                console.log(`Заказ отправлен. Содежримое заказа:`);
                console.log(data);
                resetItems();
                isOrder(true);
                isEmpty(true);
            }).catch(() => console.log('ERROR'))
    }

    return (
        <>
            <div className="cart__title"><ViewOrder/></div>
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
            <button disabled={btnDisabled} onClick={() => sendOrder(items)} className={btnClasses}>Send order</button>
        </>
    );
};

const mapStateToProps = ({items, ordered, emptyCart}) => {
    return {
        items,
        ordered,
        emptyCart
    }
};

const mapDispatchToProps = {
    deleteFromCard,
    resetItems,
    isOrder,
    isEmpty
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);