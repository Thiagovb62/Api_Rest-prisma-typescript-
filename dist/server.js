"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
const express = require('express')

const app = express()

app.use(express.json())
app.use(_routes2.default)
app.listen(3001)
