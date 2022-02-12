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

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCard,
    deleteFromCard
};