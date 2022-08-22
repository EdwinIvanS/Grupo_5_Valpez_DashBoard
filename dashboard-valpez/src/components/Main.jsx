import { useEffect, useState } from 'react';
import axios from "axios";
import TotalBox from "./TotalBox";
import LastProduct from './LastProduct';
import Categories from './Categories';
import ProductsList from './ProductsList';

function Main() {

    const [products, setProducts] = useState({});
    const [users, setUsers] = useState({});
    const [categories, setCategories] = useState({});

    const loadInfo = async () => {
        const dataProducts = await axios.get(`http://localhost:3001/api/products`);
        const dataUsers = await axios.get(`http://localhost:3001/api/users`);
        setProducts(dataProducts.data);
        setUsers(dataUsers.data);
        setCategories(dataProducts.data.countByCategory);
    }

    useEffect(()=>{
        loadInfo();
    }, [])

    
    let totalCategories = categories.Pesca + categories.Camping

    
    let info = [
        {name: "Productos",total: products.count, icon: <i className="fa-solid fa-boxes-packing"></i>}, 
        {name: "Usuarios", total: users.TotalUsuarios, icon: <i className="fa-solid fa-users"></i>},
        {name: "Categorías", total: totalCategories, icon:<i className="fa-solid fa-filter"></i>}
    ]


    return (
        <div className="main">
            {info.map(item => <TotalBox titulo={"Total de " + item.name} total={item.total} icon={item.icon}/>)}
            
            <LastProduct/>
            <Categories/>
            <ProductsList/>
        </div>
    );
  }
  
export default Main;