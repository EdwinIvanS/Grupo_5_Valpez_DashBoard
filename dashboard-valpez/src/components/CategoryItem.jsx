import React from "react";

const CategoryItem = (props) => {

  const { id, name, category  } = props;


  return (
    <>
      <tbody>
        <th scope="row" style={{ display: "none" }}>
          {id}
        </th>
        <td>{id}</td>
        <td>{name}</td>
        <td>{category}</td>
      </tbody>
    </>
  );
};

export default CategoryItem;