/* requires */
const express = require('express');
const path = require('path');

/* settings */
const app = express();
const PORT = 3030;
app.use(express.static(path.join(__dirname, 'public')));


/* routes */
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/carrito', (req,res) => res.sendFile(path.join(__dirname, 'views', 'carrito.html')));
app.get('/detalle', (req,res) => res.sendFile(path.join(__dirname, 'views', 'detalle.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));


/* server */
app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT))