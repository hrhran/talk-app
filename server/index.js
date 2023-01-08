const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { errorHandler } = require('./middlewares/error');
const connectDB = require('./config/database');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/channels', require('./routes/channelRoutes'));
app.use('/api/v1/messages', require('./routes/messageRoutes'));
app.use('/api/v1/servers', require('./routes/serverRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Backend running on localhost:${port}`));
