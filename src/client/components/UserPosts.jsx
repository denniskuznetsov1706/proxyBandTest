import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';


function UserPosts() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const { id } = useParams();
    const history = useNavigate();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => console.error("There was an error fetching the posts", error));
    }, [id]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => console.error("There was an error fetching the user", error));
    }, [id]);

    const handleBackClick = () => {
        history('/');
    };

    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            color: '#333',
            marginBottom: '20px',
        },
        backButton: {
            marginBottom: '20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
        },
        postList: {
            listStyle: 'none',
            padding: 0,
        },
        postItem: {
            background: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '20px',
        },
        postTitle: {
            fontSize: '20px',
            marginBottom: '10px',
        },
        postBody: {
            fontSize: '16px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>User Posts</h2>
            <button style={styles.backButton} onClick={handleBackClick}>Back to Main Page</button>
            <h3>User Information:</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <h3>User Posts:</h3>
            <ul style={styles.postList}>
                {posts.map(post => (
                    <li key={post.id} style={styles.postItem}>
                        <h4 style={styles.postTitle}>{post.title}</h4>
                        <p style={styles.postBody}>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserPosts;
