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
            id: action.item.productId,
            name: action.item.name,
            description: action.item.description,
            price: action.item.price,
            amount: 1,
            producer: action.item.producer,
            category: action.item.category,
            gallery: action.item.gallery
        }

        const updatedItems = state.items.concat(productCart)
        const updatedTotalAmount = state.totalAmount + productCart.amount * productCart.price

        console.log(updatedItems)
        console.log(updatedTotalAmount)
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
        dispatchCartAction({type: 'REMOVE', id: id})
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