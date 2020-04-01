const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require('minimist')(process.argv.slice(2))
const jsonData = require('../server/db.json')

var jsonFile = {
    "getData": jsonData
}

const router = jsonServer.router(jsonFile);
//const middlewares = jsonServer.defaults()
//server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'GET') {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.header('Access-Control-Expose-Headers', 'X-Total-Count');
        res.header('Access-Control-Expose-Headers', 'Content-Range');
        res.set("x-total-count", '10');
        res.send(jsonData)
    } else {
        next()
    }
        
    
})

// server.use((req, res, next) => {
//     if (req.method === 'POST') {
//         console.log("Request", req.body);
//         res.send(postOrder.postOrder);
//     } else {
//         // Continue to JSON Server router
//         next()
//     }

// })
// server.use((req, res, next) => {
//     if (req.method === 'DELETE') {
//         setTimeout(() => {
//             res.send(deleteOrder.deleteOrder);
//         }, 1000);
//     } else {
//         // Continue to JSON Server router
//         next()
//     }

// })
// server.use((req, res, next) => {
//     if (req.method === 'PUT') {
//        res.send({"message": "Entitlement is updated successfully"});  // we can send different response data from here
//     } else {
//         // Continue to JSON Server router
//         next()
//     }
// })

server.use(router)
server.listen(3002, () => {
 console.log('JSON Server is running')
})
