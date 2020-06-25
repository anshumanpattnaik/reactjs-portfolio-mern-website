import express from 'express';
import bodyParser from 'body-parser';

import '@babel/polyfill';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from '../client/App';

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 9002;

var skills_route = require('./skills/skills_controller');
var projects_route = require('./projects/projects_controller');
var blogs_route = require('./blogs/blogs_controller');

app.use("/api/projects", projects_route);
app.use("/api/skills", skills_route);
app.use("/api/blogs", blogs_route);

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
    var title = "My Portfolio | Full Stack Mern Application";
    var description = "A portfolio site is essential for every software developer to showcase projects and technical skills which demonstrates what you can do based upon your resume.";
    var thumb = "https://assets.hackbotone.com/images/my-portfolio-full-stack-mern-application/Thumbnail.png";
    var favicon = "https://assets.hackbotone.com/images/icons/anshuman_pattnaik.jpg";
    var link = "https://myportfolio.hackbotone.com";

    const context = {}

    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta content="IE=edge" http-equiv="X-UA-Compatible">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <title>${title}</title>
            <meta name="keywords" content="portfolio, software developer portfolio, anshuman portfolio, hackbotone, full stack application, web application development, react application, mern application, mern stack application, portfolio design, portfolio tutorials"/>
            <meta name="description" content="${description}">
        
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:site" content="@anspattnaik">
            <meta name="twitter:title" content="${title}">
            <meta name="twitter:description" content="${description}">
            <meta name="twitter:creator" content="@anspattnaik">
            <meta name="twitter:image" content="${thumb}">
            <meta property="og:title" content="${title}" />
            <meta property="og:description" content="${description}">
            <meta property="og:type" content="article" />
            <meta property="og:url" content="${link}" />
            <meta property="og:image" content="${thumb}" />
            <meta property="og:site_name" content="${title}" />
            <link rel="canonical" href="${link}"/>
            <link rel="shortcut icon" type="image/png" href="${favicon}"/>
            <link rel="apple-touch-icon-precomposed" href="${thumb}"/>
        </head>
        <body>
            <div id="root">${markup}</div>
            <script src="client_bundle.js"></script>
        </body>
        </html>`;

    res.send(html);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})