import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, addToBasket, removeFromBasket, getTotal } from '../store/basket';

export default function (props) {

    const {id, name, description, price, qnty} = props;
    const item = {id, name, description, price, qnty};
    let isNew = false;
    if(!qnty){
        item.qnty = 1;
        isNew = true;
    }
    const dispatch = useDispatch();

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{name}</a>
                    </h4>
                    <h5>${price}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><b>Price:</b> {price}</p>
                    {!isNew && <p className="card-text"><b>Quantity</b>: {qnty}</p>}
                </div>
                <div className="card-footer">
                {
                    isNew ?
                    <button className="btn btn-primary" onClick={() => dispatch(addToBasket(item))}>Buy it</button>
                    :
                    <>
                        <button className="btn btn-primary" onClick={() => dispatch(increaseQuantity(id))}>Get more</button>
                        <button className="btn btn-primary" onClick={() => dispatch(decreaseQuantity(id))}>Get less</button>
                        <button className="btn btn-primary" onClick={() => dispatch(removeFromBasket(id))}>Remove</button>
                    </>
                }
                </div>
            </div>
        </div>
    )
}
