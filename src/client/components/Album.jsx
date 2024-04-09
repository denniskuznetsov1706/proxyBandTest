import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Album({ albumId, title }) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => {
                setPhotos(response.data.slice(0, 5));
            })
            .catch(error => console.error("There was an error fetching the photos", error));
    }, [albumId]);

    return (
        <div style={styles.albumContainer}>
            <h3>{title}</h3>
            <div style={styles.photoContainer}>
                {photos.map(photo => (
                    <div key={photo.id} style={styles.photoItem}>
                        <img src={photo.thumbnailUrl} alt={photo.title} style={styles.photo} />
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    albumContainer: {
        marginBottom: '20px',
    },
    photoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    photoItem: {
        margin: '10px',
    },
    photo: {
        display: 'block',
        width: '150px',
    },
    viewAllLink: {
        display: 'block',
        marginTop: '10px',
        color: '#007bff',
        textDecoration: 'none',
    },
};

export default Album;
