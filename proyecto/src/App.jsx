import { useState } from 'react';
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import axios from "axios";
import { useEffect } from 'react';
import ProductList from './components/ProductList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer/>} />
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
                    <Route path='/cart' element={<Cart/>} /> 
                    <Route path='/detalle' element={<ItemDetailContainer />} />                  
                </Routes>             
            </BrowserRouter>
            <ProductList productos={productos}/>   
        </>
    );

};

function App() {
    const [productos, setProductos] = useState([]);

    const getProductos = async () => {
        const res = await axios.get("")
        setProductos(res.data);
    };

    useEffect(() => {
        getProductos();
    }, []);
}

export default App
