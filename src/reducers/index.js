const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            };
        case 'ITEM_ADD_TO_CARD':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id)
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            };
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                total: state.total + action.price
            };
        case 'ITEM_REMOVE_FROM_CARD':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: state.total - action.price
            }
        default:
            return state;
    }
}

export default reducer;