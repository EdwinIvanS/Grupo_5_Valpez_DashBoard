import React from 'react'

function LastProduct(props) {

    const ultimo = props.ultimo

    return (
        <>
        
        {ultimo ? 
            <div className="lastProduct">
                <div className="lastProduct-section">
                    <h3>Producto más reciente</h3>
                    <h3>{ultimo.title}</h3>
                    <p>Id: {ultimo.id}</p>
                    <p>{ultimo.Class.name} / {ultimo.Class.category}</p>
                </div>
                <div className="lastProduct-section">
                    <p>{ultimo.smallDescription}</p>
                </div>
                <div className="lastProduct-section">
                    <a className="lastProduct-a" href={"http://localhost:3001/products/detail/" + ultimo.id}>Ver Detalle</a>
                </div>
            </div>
        :
            <div className="lastProduct">
                <p>loading...</p>
            </div>
        }
        
        </>
        
        
    );
  }
  
export default LastProduct;