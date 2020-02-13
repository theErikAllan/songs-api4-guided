const express = require("express");

const server = express();

server.use = express.json();

server.get("/", (request, response) => {
    const songs = [ { id: 1, name: "Final Countdown" } ];

    response.status(200).json(songs)
})

const port = 5000;

server.listen(port, () => {
    console.log(`\n*** Running on port ${port} ***\n`)
})