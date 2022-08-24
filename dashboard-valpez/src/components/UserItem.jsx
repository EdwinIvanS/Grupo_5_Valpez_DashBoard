import React from "react";

const UserItem = (props) => {

  const { id, name, email  } = props;


  return (
    <>
      <tbody>
        <th scope="row" style={{ display: "none" }}>
          {id}
        </th>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
      </tbody>
    </>
  );
};

export default UserItem;