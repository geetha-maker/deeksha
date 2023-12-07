import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import Product1 from "./Product1";

function RouterDemo(){
    return(
        <body>
            <a target="_blank" onClick={()=>{window.alert("anchor")}}>Anchor1</a>
            <Router>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Routes>
                <Route target="_blank" path="/home" element={<LoginForm/>}></Route>
                <Route target="_blank" path="/about" element={<Product1/>}></Route>
            </Routes>
            </Router>
        </body>
    )
}

export default RouterDemo;