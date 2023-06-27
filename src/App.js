import React, {createContext, useState} from 'react';
import {Routes, Route} from "react-router";
import Home from "./Home";
import Shop from "./Shop";
import Info from "./info";

export const MyContext = createContext();

function App(props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [obj, setObj] = useState({
        Name: "",
        Image: "",
        Price: ""
    });
    console.log(obj);
    return (
        <MyContext.Provider value={{
            name,
            price,
            image,
            obj,
            setObj
        }}>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/shop"} element={<Shop/>}/>
            <Route path={"/info"} element={<Info/>}/>
        </Routes>
        </MyContext.Provider>
    );
}

export default App;