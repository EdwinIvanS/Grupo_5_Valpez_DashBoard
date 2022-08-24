import React from 'react';
import ProductItem from './ProductItem';

function Product(props) {
    const productsData = props.productsData
   

    return (
        <section className="holder">
            <h2>Listado de Productos</h2><br/>
            <table className="news-table">
                <thead>
                <th>Id</th>
                <th>Título</th>
                <th>Breve Descripción</th>
                <th>Clase</th>
                <th>Categoría</th>
                <th>Acciones</th>
                </thead>
                {!productsData.products ? (
                <p>loading...</p>
                ) : (
                    productsData.products.map((item) => (
                    <ProductItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    smallDescription={item.smallDescription}
                    className={item.Class.name}
                    category={item.Class.category}
                    />
                ))
                )}
            </table>
        </section>
    );
  }
  
export default Product;