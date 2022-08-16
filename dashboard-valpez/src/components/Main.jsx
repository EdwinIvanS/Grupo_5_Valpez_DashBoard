import { useEffect, useState } from 'react';
import axios from "axios";
import TotalBox from "./TotalBox";
import LastProduct from './LastProduct';
import Categories from './Categories';
import ProductsList from './ProductsList';

function Main() {

    /*let [products, setProducts] = useState([]);

    useEffect(async () => {
        let products = await getProductsData();
        setProducts(products)
    }, []);

    let getProductsData = async () => {
        let products = await axios.get('http://localhost:3001/api/products')
        return products
    }    */

    


    let productos = {total: 10, icon: <i className="fa-solid fa-boxes-packing"></i>};
    let usuarios = {total: 5, icon: <i className="fa-solid fa-users"></i>};
    let categorias = {total: 20, icon:<i className="fa-solid fa-filter"></i>};



    return (
        <div className="main">
            <TotalBox titulo="Total de Usuarios" total={usuarios.total} icon={usuarios.icon}/>
            <TotalBox titulo="Total de Productos" total={productos.total} icon={productos.icon}/>
            <TotalBox titulo="Total de Categorias" total={categorias.total} icon={categorias.icon}/>
            <LastProduct/>
            <Categories/>
            <ProductsList/>
        </div>
    );
  }
  
export default Main;