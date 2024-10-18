'use strict';


const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
  extended:true
}));

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("This app is using express.");
});

app.listen(PORT, () =>  {
  console.log(`Server listening on port ${PORT}...`);
});

