import React from 'react';
// import Preload from "Components/Preload"
import Header from "Components/Header"
import PageHero from "./Components/PageHero";
import Menu from "./Components/Menu";
import Pagination from "./Components/Pagination";

function App(props) {
    return (
        <div>
            <div id="page" className="page">
                <Header/>
                <PageHero/>
                <Menu/>
                <Pagination/>
            </div>
        </div>
    );
}

export default App;