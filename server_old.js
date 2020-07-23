const http = require('http');
const port = 8081

let todos = [
    { id: 1, value: true },
    { id: 2, value: false },
    { id: 3, value: true }
]
const server = http.createServer((request, response) => {
    let { url, method } = request
    console.log(url, method);
    response.writeHead(404, {
        'Content-Type': 'application/json',
        'X-powered-by': 'Node.js'
    })
    response.end(JSON.stringify({
        status: "success",
        data: null,
        error: "Not found"
    }));
})


server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
