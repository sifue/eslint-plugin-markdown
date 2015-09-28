"use strict";

var processor = require("./processor");

module.exports = {
    "processors": {
        ".html": processor,
        ".markdown": processor,
        ".mdown": processor,
        ".mkdn": processor,
        ".md": processor
    }
};
