import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Album from './Album';

function UserAlbums() {
    const [albums, setAlbums] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then(response => {
                console.log('albums', response.data)
                setAlbums(response.data);
            })
            .catch(error => console.error("There was an error fetching the albums", error));
    }, [id]);

    return (
        <div>
            <h2>User Albums</h2>
            <ul>
                {albums.map(album => (
                    // 
                    <Album key={album.id} albumId={album.id} title={album.title} />
                ))}
            </ul>
        </div>
    );
}

export default UserAlbums;
