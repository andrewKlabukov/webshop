import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getTotal } from '../store/basket';
import Purchases from './Purchases'
import Order     from './Order.jsx'
import Personal  from './Personal'
import Congrats  from './Congrats'
import createOrder from './order.js'

const EMPTY  = Symbol()
const PURCHASES = Symbol()
const ORDER     = Symbol()
const CONGRATS  = Symbol()

export default function() {
    const [stage, setStage] = useState(PURCHASES)
    const basket = useSelector(state => state.basket.items)
    const empty = <h2>Your basket is empty</h2>;      
    const [total, setTotal] = useState(0);


    useEffect(() => {
        if(!basket.length) return setStage(EMPTY)
        setTotal(getTotal(basket));
    })

    switch(stage){
        case EMPTY:
            return empty
        case ORDER:
            return (
                <>
                    <h2>Please check and fulfill the information about your order</h2>      
                    <Order basket={basket} total={total}/>
                    <Personal />
                    <div className="basket-footer">
                        <button className="btn btn-primary" onClick={async ()=> await createOrder(basket, total) && setStage(CONGRATS)}>Submit your data</button>
                    </div>
                </>
            )
        case CONGRATS:
            return (
                <>
                    <Congrats />
                    <Order />
                </>
            )
    }
    return (
        basket.length ?
        <>
            <h2>Your purchases</h2>      
            <Purchases />
            <div className="basket-footer">
                <button className="btn btn-primary" onClick={()=> setStage(ORDER)}>Order your purchases</button>
            </div>
            <br/>
        </>
        :
        empty

    )
}
