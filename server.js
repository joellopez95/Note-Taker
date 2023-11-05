//Get handle on all of my paths, static paths, etc.
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Routes
app.use(apiRoutes);
app.use(htmlRoutes);
//How to start Server

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});