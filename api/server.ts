'use strict';
import appRoutes from "./routes";

const express = require('express');
const cors = require('cors');
const fs = require('fs')

// Constants
const PORT = 8082;
const HOST = 'localhost';

// App
const app = express();
app.use(cors());
app.options('*', cors());

app.use(appRoutes)

app.listen(PORT, HOST);
const URL = `http://${HOST}:${PORT}`
console.log(`Running on ${URL} 🎉`);

export { URL }