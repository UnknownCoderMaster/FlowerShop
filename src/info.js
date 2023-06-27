import React, {useContext} from 'react';
import Navbar from "./navbar";
import {MyContext} from "./App";

function Info(props) {

    let value = useContext(MyContext);
    return (
        <div>
            <Navbar/>
            <div id="home" className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <p>Informations:</p>
                            <h1>Name: <k>{value.obj.Name}</k></h1>
                            <p>Price: {value.obj.Price}</p>
                            <h6>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to
                                create an unique Urban Jungle. Order your favorite plants!</h6>
                            <button className="btn btn-success">BUY NOW</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={value.obj.Image} alt={value.obj.Name}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;