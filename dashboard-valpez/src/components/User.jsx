import React from 'react';
import UserItem from './UserItem';

function User(props) {
    const users = props.users
   

    return (
        <section className="holder">
            <h2>Listado de Usuarios</h2><br/>
            <table className="news-table">
                <thead>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                </thead>
                {!users.users ? (
                <p>loading...</p>
                ) : (
                    users.users.map((item) => (
                    <UserItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    />
                ))
                )}
            </table>
        </section>
    );
  }
  
export default User;