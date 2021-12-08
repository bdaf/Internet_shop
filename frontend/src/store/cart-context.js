import React, { useReducer } from 'react'

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => {},
})

export default CartContext

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const productCart = {
            productId: action.item.productId,
            name: action.item.name,
            description: action.item.description,
            price: action.item.price,
            amount: 1,
            producer: action.item.producer,
            category: action.item.category,
            gallery: action.item.gallery
        }

        let updatedItems;
        const updatedTotalAmount = state.totalAmount + productCart.amount * productCart.price

        const exisitngCartItemsIndex = state.items.findIndex((item) => item.productId === productCart.productId)
        const exisitngItem = state.items[exisitngCartItemsIndex]

        if (exisitngItem) {
            const upadatedItem = {
                ...exisitngItem,
                amount: exisitngItem.amount + productCart.amount
            }
            updatedItems = [...state.items]
            updatedItems[exisitngCartItemsIndex] = upadatedItem
        } else {
            updatedItems = state.items.concat(productCart)
        }
        // console.log(updatedItems)
        // console.log(updatedTotalAmount)

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    else if (action.type === 'REMOVE') {
        const exisitngCartItemsIndex = state.items.findIndex((item) => item.productId === action.productId)
        const exisitngItem = state.items[exisitngCartItemsIndex]
        const updatedTotalAmount = state.totalAmount - exisitngItem.price;

        let updatedItems
        if (exisitngItem.amount === 1) {
            updatedItems = state.items.filter(item => item.productId !== action.productId)
        } else {
            const upadatedItem = { ...exisitngItem, amount: exisitngItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[exisitngCartItemsIndex] = upadatedItem
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState
}

export const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', productId: id})
    }

    const contextValue = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
}