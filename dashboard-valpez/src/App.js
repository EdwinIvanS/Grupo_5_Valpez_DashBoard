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
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/categories" element={<Category/>}></Route>
        <Route path="/users" element={<User/>}></Route>
        <Route path="/products" element={<Product/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
