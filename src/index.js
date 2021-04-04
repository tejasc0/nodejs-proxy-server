import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

ReactDOM.render(<App/>, document.getElementById('root'));