import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log('users data->', response)
                setUsers(response.data);
            })
            .catch(error => console.error("There was an error!", error));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - <Link to={`/users/${user.id}/posts`}>Posts</Link> | <Link to={`/users/${user.id}/albums`}>Albums</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
