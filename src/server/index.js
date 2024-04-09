import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server'; // Імпортуємо StaticRouter
import App from '../client/App'; // Переконайтеся, що шлях до App правильний

const app = express();

// Переконайтеся, що шлях до статичних файлів відповідає вашій структурі каталогів
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
    const context = {}; // Context для StaticRouter
    const appMarkup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    // Враховуючи вашу структуру каталогів, переконайтеся, що шлях до index.html правильний
    const indexFile = path.resolve(__dirname, 'public/index.html');
    console.log(indexFile);
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Something went wrong!');
        }
        // Заміна дива з id "app" на рендерений контент додатку
        return res.send(data.replace('<div id="app"></div>', `<div id="app">${appMarkup}</div>`));
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
