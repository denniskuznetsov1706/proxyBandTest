import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Album from './Album';
import { Helmet } from "react-helmet";
function UserAlbums() {
    const [albums, setAlbums] = useState([]);
    const { id } = useParams();
    const history = useNavigate();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then(response => {
                console.log('albums', response.data)
                setAlbums(response.data);
            })
            .catch(error => console.error("There was an error fetching the albums", error));
    }, [id]);

    const handleBackClick = () => {
        history('/');
    };

    const styles = {
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
        }
    }

    return (
        <div>
            <Helmet>
                <title>Information about users Albums</title>
                <meta name="description" content={`Information about users Albums`} />
            </Helmet>
            <h2>User Albums</h2>
            <button style={styles.backButton} onClick={handleBackClick}>Back to Main Page</button>
            <ul>
                {albums.map(album => (
                    <Album key={album.id} albumId={album.id} title={album.title} />
                ))}
            </ul>
        </div>
    );
}

export default UserAlbums;
