import React from 'react';
import MenuPage from "./Components/Product-Menu/Menu_Page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu_Page from "./Components/Product-Menu/Menu_Page";
import Cart_Page from "./Components/Product-Cart/Cart_Page";

function App(props) {
    return (
        <div>
            <div id="page" className="page">
                <BrowserRouter>
                    <Routes>
                        <Route path="/menu" element={<Menu_Page/>}/>
                        <Route path="/cart" element={<Cart_Page/>}/>
                        <Route path="*" element = {<Menu_Page/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;