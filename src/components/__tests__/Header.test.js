import Header from "../Header";
import {render} from "@testing-library/react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { GetAllBy } from "@testing-library/react";
import { GetBy } from "@testing-library/react";

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
   const cart=header.getAllByTestId('cart');

 expect(cart[0].innerHTML).toBe("cart-0items");



})