import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar.jsx";
import Signlog from './component/signlog.jsx'
import Createacc from './component/createacc.jsx'
import Home from './component/home.jsx'
import Products from './component/products.jsx';

function App() {

    return (

        <BrowserRouter >
            <Routes >
                <Route path="/" element={< Home />} />
                <Route path="/signlog" element={< Signlog />} />
                <Route path="/createacc" element={< Createacc />} />
                <Route path="/product" element={<Products />} />
            </Routes>
        </BrowserRouter>



    );
}

export default App;