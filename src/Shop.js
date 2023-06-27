import React, {useContext, useState} from 'react';
import ReactPaginate from "react-paginate";
import Navbar from "./navbar";
import {MyContext} from "./App";
import {useNavigate} from "react-router-dom";

function Shop(props) {

    const navigate = useNavigate();

    let val = useContext(MyContext);

    function copyObject(Name, Image, Price) {
        let newOBJ={
            Name,
            Image,
            Price
        };
        val.setObj(newOBJ);
    }

    const [pageNumber, setPageNumber] = useState(0);
    const howManyObjects = 4;
    const pagesVisited = pageNumber * howManyObjects;

    const Flowers=[
        {
            name:"Barberton Daisy",
            price:"$119.00",
            img:"images/BarbertonDaisy.png"
        },
        {
            name:"Angel Wing Begonia",
            price:"$169.00",
            img:"images/AngelWingBegonia.png"
        },
        {
            name:"African Violet",
            price:"$199.00",
            img:"images/AfricanViolet.png"
        },
        {
            name:"Beach Spider Lily",
            price:"$129.00",
            img:"images/BeachSpiderLily.png"
        },
        {
            name:"Blushing Bromeliad",
            price:"$139.00",
            img:"images/BlushingBromeliad.png"
        },
        {
            name:"Aluminum Plant",
            price:"$179.00",
            img:"images/AluminumPlant.png"
        },
        {
            name:"Bird's Nest Fern",
            price:"$99.00",
            img:"images/Bird'sNestFern.png"
        },
        {
            name:"Broadleaf Lady Palm",
            price:"$59.00",
            img:"images/BroadleafLadyPalm.png"
        },
        {
            name:"Chinese Evergreen",
            price:"$39.00",
            img:"images/ChineseEvergreen.png"
        },
    ];

    const FlowerList= Flowers.slice(pagesVisited,pagesVisited + howManyObjects).map((item)=>{
        return <div className="card" onClick={()=>{copyObject(item.name, item.img, item.price); navigate("/info");}}>
            <div className="card-header p-0">
                <img src={item.img} alt={item.name}/>
            </div>
            <div className="card-body">
                <h6>{item.name}</h6>
                <h5>{item.price}</h5>
            </div>
        </div>
    });

    const pageCount = Math.ceil(Flowers.length / howManyObjects);
    const changePage = ({selected}) => {
        setPageNumber(selected)
    };

    return (
        <div>
            <Navbar/>
            <div id="shop" className="container">
                <div className="row">
                    {FlowerList}
                </div>
                <div className="row">
                    <ReactPaginate
                        previousLabel={<img src="left.png" alt="prev" width={20}/>}
                        nextLabel={<img src="right.png" alt="next" width={20}/>}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledCalassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Shop;