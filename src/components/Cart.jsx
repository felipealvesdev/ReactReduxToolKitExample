import { useDispatch, useSelector } from "react-redux"
import { decrementQuantity, incrementQuantity } from "../redux/testeSlice";

export default function Cart() {

    const { name } = useSelector(state => state.test);
    const { quantity, price,} = useSelector(state => state.test);
    const dispatch = useDispatch();
    
    const getFullPrice = () => {
        return quantity * price;
    }

    const handleIncrement = () => {
        dispatch(incrementQuantity());
    }

    const handleDecrement = () => {
        dispatch(decrementQuantity());
    }

    return (
        <div>
            <h1>Cart</h1>

            <h2>Product name: {name} </h2>
            <h2>{quantity}</h2>
            <h2>{price}</h2>

            <h3>{getFullPrice()}</h3>

            <button onClick={handleIncrement}>Incrementar qtd de peças</button>
            <button onClick={handleDecrement}>Decrementar qtd de peças</button>

        </div>
    )
}
