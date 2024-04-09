import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserPosts() {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => console.error("There was an error fetching the posts", error));
    }, [id]);

    return (
        <div>
            <h2>User Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserPosts;
