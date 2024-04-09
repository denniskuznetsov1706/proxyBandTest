import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist/public')));

app.get('*', (req, res) => {
    const appMarkup = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve(__dirname, 'public/index.html');
    console.log(indexFile);
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Something went wrong!');
        }

        return res.send(data.replace('<div id="app"></div>', `<div id="app">${appMarkup}</div>`));
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
