const fs = require('fs');
const fastify = require('fastify'); 

const coinCount = (...coinage) => valueFromArray(coinage);
module.exports = { validDenomination, valueFromCoinObject, valueFromArray, coinCount };


const server = fastify();

server.get("/", (request, reply) => {
    fs.readFile(`${__dirname}/index.html`, 'utf8', (err, data) => {
        if (err) {
            reply.code(500).send('Internal Server Error');
        } else {
            reply
                .code(200)
                .header("Content-Type", "text/html; charset=utf-8")
                .send(data);
        }
    });
});

server.listen(8080, 'localhost', (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});

const fastify = require('fastify');
const fs = require('fs');
const { validDenomination, valueFromCoinObject, valueFromArray, coinCount } = require('./coinFunctions');

const server = fastify();

//Part 8 

server.get("/", (request, reply) => {
    fs.readFile(`${__dirname}/index.html`, 'utf8', (err, data) => {
        if (err) {
            reply.code(500).send('Internal Server Error');
        } else {
            reply
                .code(200)
                .header("Content-Type", "text/html; charset=utf-8")
                .send(data);
        }
    });
});

//Part 9 

server.get("/coin", (request, reply) => {
    const { denom = '0', count = '0' } = request.query;
    const denomInt = parseInt(denom);
    const countInt = parseInt(count);
    
    const coinValue = coinCount(denomInt, countInt);
    
    reply
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send(`<h2>Value of ${countInt} of ${denomInt} is ${coinValue}</h2><br /><a href="/">Home</a>`);
});

server.listen(8080, 'localhost', (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});

//Part 10 

server.get("/coins", (request, reply) => {
    const { option } = request.query;
    let coinValue = 0;

    switch (option) {
        case '1':
            coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
            break;
        case '2':
            const coins = [/* array of coin objects */]; 
            coinValue = coinCount(...coins);
            break;
        default:
            reply
                .code(200)
                .header("Content-Type", "text/html; charset=utf-8")
                .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`);
});
