import React from 'react';
import CategoryItem from './CategoryItem';

function Category(props) {
    const subcategories = props.subcategories
   

    return (
        <section className="holder">
            <h2>Listado de Categorías</h2><br/>
            <table className="news-table">
                <thead>
                <th>Id</th>
                <th>Nombre subcategoría</th>
                <th>Categoría</th>
                </thead>
                {!subcategories.classes ? (
                <p>loading...</p>
                ) : (
                    subcategories.classes.map((item) => (
                    <CategoryItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    category={item.category}
                    />
                ))
                )}
            </table>
        </section>
    );
  }
  
export default Category;