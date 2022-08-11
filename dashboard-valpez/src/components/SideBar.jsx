import {Link} from "react-router-dom";

function SideBar() {
    let options = [{name:"Categorías", url:"/categories", icon:<i class="fa-solid fa-filter"></i>}, {name:"Usuarios", url: "/users", icon: <i class="fa-solid fa-users"></i>},{name:"Productos", url:"/products", icon: <i class="fa-solid fa-boxes-packing"></i>}]

    return (
        <div className="sideBar">
            <ul>    
                {options.map((option, i) => (
                    <li key={option + i}><Link to={option.url}>{option.icon}{option.name}</Link></li>
                ))}
            </ul>
        </div>
    );
  }
  
export default SideBar;