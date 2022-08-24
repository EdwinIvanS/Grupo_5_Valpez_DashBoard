import React from 'react'
import TotalBox from "./TotalBox";
import LastProduct from './LastProduct';
import Categories from './Categories';

function Main(props) {
    
    let info = [
        {name: "Productos",total: props.productsData.count, icon: <i className="fa-solid fa-boxes-packing"></i>}, 
        {name: "Usuarios", total: props.users.count, icon: <i className="fa-solid fa-users"></i>},
        {name: "Subcategorías", total: props.subcategories.count, icon:<i className="fa-solid fa-filter"></i>}
    ]


    return (
        <div className="main">
            {info.map((item, i) => <TotalBox key={item.name + i} titulo={"Total de " + item.name} total={item.total} icon={item.icon}/>)}
            
            <LastProduct ultimo = {props.ultimo}/>
            <Categories totalCamping={props.totalCamping} totalPesca={props.totalPesca}/>
        </div>
    );
  }
  
export default Main;