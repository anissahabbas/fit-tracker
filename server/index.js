

"use strict";

const express = require('express');
const morgan = require('morgan');

//require handlers up here

express()
.use(morgan('tiny'))
.use(express.json())

.use(express.static("public"))

// endpoints below

.get('/hello', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'hello you',
    })
})


// endpoints above here ^^^^^

.get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })


.listen(4000, () => console.log(`Listening on port 4000`));

