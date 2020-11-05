const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 8082; // whatever is in the env variable PORT or 3000 if nothing there

app.listen(port, () => console.log(`Server running on port ${port}`))