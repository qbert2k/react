const express = require('express');
require('dotenv').config();

console.log(process.env);

const app = express();

// Public
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.json({
//         ok: true
//     })
// });

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
})