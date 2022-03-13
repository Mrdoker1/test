const http = require('http');
const { rawListeners } = require('process');

const port = process.env.PORT || 3000

const boys = JSON.stringify([
    { title: "Boss Of The Gym", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet Of Gym", author: "Kahlil Gibran", year: 1923 }
]);

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/boys":
            res.writeHead(200);
            res.end(boys);
            break
            /* case "/authors":
                res.writeHead(200);
                res.end(authors);
                break */
    }
}

const server = http.createServer(requestListener)

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})