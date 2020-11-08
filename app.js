const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

//routes 
const books = require('./routes/api/books');

const app = express();
// connect DB
connectDB();

//cors
app.use(cors({origin: true, credentials: true}));

//Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello World!'));

//routes
app.use('/api/books', books)

const port = process.env.PORT || 8082; // whatever is in the env variable PORT or 3000 if nothing there

app.listen(port, () => console.log(`Server running on port ${port}`))