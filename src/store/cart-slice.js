import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalquantity: 0,
        showCart: false,
        changed: false,
    },
    reducers: {
        replaceData: (state, action) => {
            state.totalquantity = action.payload.totalquantity
            if(action.payload.itemList){
                state.itemList = action.payload.itemList
            }else {
                state.itemList = []
            }
        },
        addToCard: (state, actions) => {
            state.changed = true
            const newItem = actions.payload;

            const existingItem = state.itemList.find(item => item.id === newItem.id)

            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalquantity++
            }
        },
        removeFromCart: (state, actions) => {
            state.changed = true
            const itemId = actions.payload 
            const itemIndex  = state.itemList.findIndex(item => item.id === itemId); // return itemList[itemId]

            if(itemIndex || itemIndex===0){
                const itemToRemove = state.itemList[itemIndex]
                if(itemToRemove.quantity > 1){
                    itemToRemove.quantity--
                    itemToRemove.totalPrice -= itemToRemove.price
                }else if(itemToRemove.quantity === 1) {
                    state.itemList = state.itemList.filter(item => item.id !== itemId)
                    state.totalquantity --
                }
            }
        },
        showCart: (state)=>{
            state.showCart = !state.showCart
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice 