const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    };
};

const addedToCard = (id, price) => {
    return {
        type: 'ITEM_ADD_TO_CARD',
        payload: id,
        price
    };
};

const deleteFromCard = (id, price) => {
    return {
        type: 'ITEM_REMOVE_FROM_CARD',
        payload: id,
        price
    };
};

const resetItems = () => {
    return {
        type: 'RESET_ITEMS'
    };
};

const isOrder = (ordered) => {
    return {
        type: 'IS_ORDER',
        ordered
    };
};

const isEmpty = (value) => {
    return {
        type: 'IS_EMPTY',
        emptyCart: value
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCard,
    deleteFromCard,
    resetItems,
    isOrder,
    isEmpty
};