import React, {useState} from "react";
import './Product.css';

function Cart(pro){
    window.alert("hello");
    window.alert(pro.pname);
    return(
        <div className="s4">
            <label>Product Name: {pro.pname}</label>
            <label>Product Desc: {pro.pdesc}</label>
            <label>Product Price: {pro.pprice}</label>
        </div>
    );
}

function Home(){
    return <h1>hello</h1>
}

const handle=(temp,productDetails)=>{
    return <h1>hii</h1>
    window.alert("handle");
    temp ? <Cart pro={productDetails}/> : <Home/>;
}



function Product(){
    const [productName, setProductName]=useState("");
    const [productDesc, setProductDesc]=useState("");
    const [productPrice, setProductPrice]=useState("");
    const productDetails={pname:{productName}, pdesc:{productDesc}, pprice:{productPrice}};

    const [temp, setTemp]=useState(false);
    return(
        <body className="s1">
            <div className="s2">
                <label>Product Name: </label>
                <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)} />
            </div><br/><br/>
            <div>
                <label>Product Description: </label>
                <textarea value={productDesc} onChange={(e)=>setProductDesc(e.target.value)}/>
            </div><br/><br/>
            <div>
                <label>Product Price: </label>
                <input type="text" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} />
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="s2" onClick={()=>{setTemp(true); handle(temp,productDetails)}}>Add to Cart</button>
        
        </body>
    );
}

export default Product;