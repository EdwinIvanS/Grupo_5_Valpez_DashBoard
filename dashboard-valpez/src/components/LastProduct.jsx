import {Link} from "react-router-dom";

function LastProduct() {

    return (
        <div className="lastProduct">
            <div className="lastProduct-section">
                <h3>{'lastProduct.title'}</h3>
                <p>{'lastProduct.id'}</p>
                <p>{'lastProduct.Class.name'} {'lastProduct.Class.category'}</p>
            </div>
            <div className="lastProduct-section">
                <p>{'lastProduct.smallDescription'}</p>
            </div>
            <div className="lastProduct-section">
                <Link to={"http://localhost:3001/products/detail/" + 'lastProduct.id'}>Ver Detalle</Link>
            </div>
        </div>
    );
  }
  
export default LastProduct;