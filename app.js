const express = require('express');
const mongoose = require('mongoose');
const DB_CONNECT = require('./constantes/databaseConst');
const categoryRoutes = require('./routes/category');
const moduleRoutes = require('./routes/module');
const questionRoutes = require('./routes/question');
const answersRoutes = require('./routes/answers');
const userRoutes = require('./routes/users');

const app = express();

mongoose.connect('mongodb+srv://' + DB_CONNECT.DB_LOGIN + ':' + DB_CONNECT.DB_PASS + '@' + DB_CONNECT.DB_CLUSTER, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'x-access-token, Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/module', moduleRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/answers', answersRoutes);


module.exports = app;