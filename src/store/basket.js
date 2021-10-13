import { createSlice } from '@reduxjs/toolkit';
import { load, save  } from './load-save'

const getItem   = (arr, id)   => arr.filter(el => el.id === id)[0]
const hasItem   = (arr, id)   => arr.filter(el => el.id === id).length 
const getBut    = (arr, id)   => arr.filter(el => el.id !== id)
const combine   = (arr, item) => [...arr, item].sort((a, b)=> a.id - b.id)
const setAmount = (arr, id, num) => {
    const item = getItem(arr, id)
    const items = getBut(arr, id)
    item.qnty += num 
    return !item.qnty ? items : combine(items, item)
}

const name = 'basket';

const slice = createSlice({

    name,
    initialState: {items: load(name)},
    reducers: {
        addToBasket: (state, action) => {
            const {items} = state
            state.items = hasItem(items, action.payload.id) 
                && setAmount(items, action.payload.id, 1) 
                || combine (items, action.payload); 
            save(name, state.items)
        },
        removeFromBasket: (state, action) => {state.items = getBut(state.items, action.payload); save(name, state.items)},
        increaseQuantity: (state, action) => {state.items = setAmount(state.items, action.payload,  1); save(name, state.items)},
        decreaseQuantity: (state, action) => {state.items = setAmount(state.items, action.payload, -1); save(name, state.items)},
    }
    
})

export const getTotal = items => items.reduce((acc, el) => acc + el.qnty * el.price, 0).toFixed(2)

export const { actions, reducer } = slice;
export const { increaseQuantity, decreaseQuantity, addToBasket, removeFromBasket } = actions;
