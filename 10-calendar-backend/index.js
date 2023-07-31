const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.json({
        ok: true
    })
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})