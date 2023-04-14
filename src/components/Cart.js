
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { clearCart } from "../utils/cartSlice";



const Cart=()=>{
    
    const dispatch =useDispatch();
    const handleclearcart=()=>[
        dispatch(clearCart())
    ]
    

  const cartItems=useSelector(store=> store.cart.items);

    return (
        <div>
            <button className="p-2 bg-green-400" onClick={()=>{handleclearcart()}}>clear cart</button>
            {cartItems.map((e)=><h1 className="p-4 bg-red-700 border-2 border-emerald-500">{e}</h1>)}
        </div>

    );
}

export default Cart;