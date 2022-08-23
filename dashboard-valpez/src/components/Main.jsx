import { useEffect, useState } from 'react';
import axios from "axios";
import TotalBox from "./TotalBox";
import LastProduct from './LastProduct';
import Categories from './Categories';
import ProductsList from './ProductsList';

function Main() {

    const [products, setProducts] = useState({});
    const [users, setUsers] = useState({});
    const [subcategories, setSubcategories] = useState({});
    const [totalPesca, setTotalPesca] = useState();
    const [totalCamping, setTotalCamping] = useState();

    const loadInfo = async () => {
        const dataProducts = await axios.get(`http://localhost:3001/api/products`);
        const dataUsers = await axios.get(`http://localhost:3001/api/users`);
        const dataSubcategories = await axios.get(`http://localhost:3001/api/classes`);

        setProducts(dataProducts.data);
        setUsers(dataUsers.data);
        setSubcategories(dataSubcategories.data);
        setTotalPesca(dataProducts.data.countByCategory.Pesca);
        setTotalCamping(dataProducts.data.countByCategory.Camping);
    }


    useEffect(()=>{
        loadInfo();
    }, [])


    
    
    let info = [
        {name: "Productos",total: products.count, icon: <i className="fa-solid fa-boxes-packing"></i>}, 
        {name: "Usuarios", total: users.count, icon: <i className="fa-solid fa-users"></i>},
        {name: "Subcategorías", total: subcategories.count, icon:<i className="fa-solid fa-filter"></i>}
    ]


    return (
        <div className="main">
            {info.map((item, i) => <TotalBox key={item.name + i} titulo={"Total de " + item.name} total={item.total} icon={item.icon}/>)}
            
            {/*<LastProduct />*/}
            <Categories totalCamping={totalCamping} totalPesca={totalPesca}/>
            <ProductsList/>
        </div>
    );
  }
  
export default Main;