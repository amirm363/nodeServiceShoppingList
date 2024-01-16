const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./src/routes/categoryRoutes');
const itemRoutes = require('./src/routes/itemRoutes');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
