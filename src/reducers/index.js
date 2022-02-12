const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0,
    ordered: false,
    emptyCart: true
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
            let count = 1;
            state.items.forEach(element => {
                if (element.id === item.id) {
                    count = element.count + 1;
                    state.items.splice(state.items.indexOf(element), 1)
                }
            })
            const newItem = {
                id: item.id,
                price: item.price,
                title: item.title,
                url: item.url,
                count
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
            if (state.items[itemIndex].count > 1) {
                state.items[itemIndex].count--;
                return {
                    ...state,
                    items: [...state.items],
                    total: state.total - action.price
                }
            } else {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndex),
                        ...state.items.slice(itemIndex + 1)
                    ],
                    total: state.total - action.price
                };
            }
        case 'RESET_ITEMS':
            return {
                ...state,
                items: [],
                total: 0
            };
        case 'IS_ORDER':
            return {
                ...state,
                ordered: action.ordered
            };
        case 'IS_EMPTY':
            return {
                ...state,
                emptyCart: action.emptyCart
            }
        default:
            return state;
    }
}

export default reducer;