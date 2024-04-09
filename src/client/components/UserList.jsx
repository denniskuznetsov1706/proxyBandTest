import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => console.error("There was an error!", error));
    }, []);

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchInputChange = event => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    };

    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.username.localeCompare(b.username);
        } else {
            return b.username.localeCompare(a.username);
        }
    });

    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            color: '#333',
        },
        searchInput: {
            marginBottom: '20px',
            padding: '8px',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box',
        },
        userList: {
            listStyle: 'none',
            padding: 0,
        },
        userItem: {
            background: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        },
        userInfo: {
            fontSize: '16px',
            color: '#555',
        },
        link: {
            color: '#007bff',
            textDecoration: 'none',
        },
        blockLink: {
            display: 'flex'
        },
        sortButton: {
            cursor: 'pointer',
            color: '#007bff',
            textDecoration: 'underline',
            marginLeft: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>User List</h2>
            <input
                type="text"
                placeholder="Search by username or name"
                value={searchQuery}
                onChange={handleSearchInputChange}
                style={styles.searchInput}
            />
            <div>
                Sort by username:
                <button style={styles.sortButton} onClick={handleSortChange}>
                    {sortOrder === 'asc' ? 'Asc' : 'Desc'}
                </button>
            </div>
            <ul style={styles.userList}>
                {sortedUsers.map(user => (
                    <li key={user.id} style={styles.userItem}>
                        <div style={styles.userInfo}><strong>Username:</strong> {user.username}</div>
                        <div style={styles.userInfo}><strong>Email:</strong> {user.email}</div>
                        <div style={styles.userInfo}><strong>Name:</strong> {user.name}</div>
                        <div style={styles.userInfo}><strong>Phone:</strong> {user.phone}</div>
                        <div style={styles.userInfo}><strong>Company:</strong> {user.company.name}</div>
                        <div style={styles.userInfo}><strong>Website:</strong> <a href={`http://${user.website}`} style={styles.link} target="_blank" rel="noopener noreferrer">{user.website}</a></div>
                        <div style={styles.blockLink}>
                            <Link to={`/users/${user.id}/posts`} style={styles.link}>Posts</Link>&nbsp;|&nbsp;
                            <Link to={`/users/${user.id}/albums`} style={styles.link}>Albums</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
