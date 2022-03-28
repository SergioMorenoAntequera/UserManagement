'use strict';

const express = require('express');
const cors = require('cors');
const fs = require('fs')

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());
app.options('*', cors());

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);