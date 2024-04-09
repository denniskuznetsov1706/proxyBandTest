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
        <div>
            <h3>{title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map(photo => (
                    <div key={photo.id} style={{ margin: '10px' }}>
                        <img src={photo.thumbnailUrl} alt={photo.title} style={{ display: 'block', width: '150px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Album;
