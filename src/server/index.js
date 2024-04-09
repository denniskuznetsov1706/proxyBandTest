import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
import App from '../client/App';

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));


app.get('*', (req, res) => {
    const context = {};
    const appMarkup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    const indexFile = path.resolve(__dirname, 'public/index.html');
    console.log(indexFile);
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Something went wrong!');
        }
        const html = data
            .replace('<title></title>', helmet.title.toString() + helmet.meta.toString())
            .replace('<div id="app"></div>', `<div id="app">${appMarkup}</div>`);

        return res.send(html);
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
