import Header from "../Header";
import {render} from "@testing-library/react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server"
test("checking cart should be zero",()=>{
    // try to load header 
    // check if logo is loaded 
    const header=render(
   
        <StaticRouter>
            <Provider store={store}>
            <Header/>
        </Provider>
        </StaticRouter>
  
        );
      //console.log(header);
   const cart=Header.getByTestId('cart');

 expect(cart.innerHTML).toBe("cart-0items");



})