import { useEffect, useState } from 'react';
import axios from "axios";
import TotalBox from "./TotalBox";
function Main() {

    let productos = {total: 20, icon: <i class="fa-solid fa-boxes-packing"></i>};
    let usuarios = {total: 5, icon: <i class="fa-solid fa-users"></i>};
    let categorias = {total: 20, icon:<i class="fa-solid fa-filter"></i>};



    return (
        <div className="main">
            <TotalBox titulo="Total de Usuarios" total={usuarios.total} icon={usuarios.icon}/>
            <TotalBox titulo="Total de Productos" total={productos.total} icon={productos.icon}/>
            <TotalBox titulo="Total de Categorias" total={categorias.total} icon={categorias.icon}/>
        </div>
    );
  }
  
export default Main;