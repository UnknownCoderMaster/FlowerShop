import React from 'react';
import Navbar from "./navbar";

function Home(props) {
    return (
        <div>
            <Navbar/>
            <div id="home" className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <p>Welcome to GreenShop</p>
                            <h1>Let’s Make a
                                Better <k>Planet</k></h1>
                            <h6>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to
                                create an unique Urban Jungle. Order your favorite plants!</h6>
                            <button className="btn btn-success">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="flower1.png" alt="flower1"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;