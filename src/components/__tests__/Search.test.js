import Body from "../Body"
import { render, waitFor ,fireEvent} from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data"
import "@testing-library/jest-dom"
import reslist from "../../utils/mockData"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RESTAURANT_DATA)}
    })
});


test("shimmers on homepage",()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body></Body>

            </Provider>
        </StaticRouter>
    )
    const shimmer=body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(30);
    
    
});

test("restaurants on homepage",async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body></Body>

            </Provider>
        </StaticRouter>
    );

   await waitFor(()=>expect(body.getByTestId('search-btn')));
    const reslist=body.getByTestId("res-list");
    expect(reslist.children.length).toBe(15);
    
    
});
