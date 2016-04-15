const fs = require('fs');
const sizeOf = require('image-size');
const path = require('path');
const Q = require('q');
const fstream = require('fstream');
const tar = require('tar');
const zlib = require('zlib');
const electron = require('electron');
const webFrame = electron.webFrame;
const ipcRenderer = electron.ipcRenderer;
const remote = require('remote');
const dialog = remote.dialog;
const app      = remote.app;
const Menu     = remote.Menu;
const BrowserWindow = remote.BrowserWindow;
const mainWindow = remote.require('browser-window');
const packageJson     = require('./package.json');
window.$ = window.jQuery = require('./bower_components/jquery/dist/jquery.min.js');