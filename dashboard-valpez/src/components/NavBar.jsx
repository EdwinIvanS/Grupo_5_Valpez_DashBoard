import {Link} from "react-router-dom";

function NavBar() {
    let options = [{name:"Categorías", url:"/categories", icon:<i className="fa-solid fa-filter"></i>}, {name:"Usuarios", url: "/users", icon: <i className="fa-solid fa-users"></i>},{name:"Productos", url:"/products", icon: <i className="fa-solid fa-boxes-packing"></i>}]

    return (
        <div className="navBar">
            <ul className="navBar-options">    
                {options.map((option, i) => (
                    <li className="navBar-li" key={option + i}><Link to={option.url}>{option.icon} {option.name}</Link></li>
                ))}
            </ul>
        </div>
    );
  }
  
export default NavBar;