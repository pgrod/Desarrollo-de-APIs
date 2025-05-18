const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        "id":"1",
        "nombre":"juan",
        "email":"juan@email.com",
    })
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})