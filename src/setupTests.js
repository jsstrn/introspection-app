require("jest-canvas-mock");

global.fetch = require("jest-fetch-mock");

window.URL.createObjectURL = () => {};
