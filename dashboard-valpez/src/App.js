import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Category from "./components/Category";
import User from "./components/User";
import Product from "./components/Product";
import Footer from "./components/Footer";

import "./assets/css/styles.css"

function App() {

  const [productsData, setProductsData] = useState([]);
  const [users, setUsers] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [totalPesca, setTotalPesca] = useState();
  const [totalCamping, setTotalCamping] = useState();
  const [ultimo, setUltimo] = useState(null);

  const loadInfo = async () => {
      const dataProducts = await axios.get(`http://localhost:3001/api/products`);
      const dataUsers = await axios.get(`http://localhost:3001/api/users`);
      const dataSubcategories = await axios.get(`http://localhost:3001/api/classes`);

      setProductsData(dataProducts.data);
      setUsers(dataUsers.data);
      setSubcategories(dataSubcategories.data);
      setTotalPesca(dataProducts.data.countByCategory.Pesca);
      setTotalCamping(dataProducts.data.countByCategory.Camping);
      setUltimo(dataProducts.data.products[dataProducts.data.count - 1]);
  }


  useEffect(()=>{
      loadInfo();
  }, [])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element=
          {<Main 
            productsData={productsData}
            users={users}
            subcategories={subcategories}
            totalPesca={totalPesca}
            totalCamping={totalCamping}
            ultimo={ultimo}
            />
          }>
        </Route>
        <Route path="/categories" element={<Category subcategories={subcategories}/>}></Route>
        <Route path="/users" element={<User users={users} />}></Route>
        <Route path="/products" element={<Product productsData={productsData} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
