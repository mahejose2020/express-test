const express = require('express');
const app = express(); 
const PORT = 5000;
app.get('/', (req, res) => 
    { res.send('Good morning Rwanda!'); });
app.get('/great', (req, res) => {
res.send('Thank you!'); });
app.get('/hello', (req, res) => 
    { res.send('Konnichiha'); });
app.listen(PORT, () => 
    { console.log(`Server is listening at http://localhost:${PORT}`)});
