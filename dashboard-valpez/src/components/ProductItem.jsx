import React from "react";

const ProductItem = (props) => {

  const { id, title, smallDescription, className, category } = props;


  return (
    <>
      <tbody>
        <th scope="row" style={{ display: "none" }}>
          {id}
        </th>
        <td>{id}</td>
        <td>{title}</td>
        <td>{smallDescription}</td>
        <td>{className}</td>
        <td>{category}</td>
        <td class="acciones">
            <a className="lastProduct-a" href={"http://localhost:3001/products/edit/" + id}>Editar</a>
            <br/>
            <br/>
            <a className="lastProduct-a" href={"http://localhost:3001/products/detail/" + id}>Detalle</a>
        </td>
      </tbody>
    </>
  );
};

export default ProductItem;