var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8001),
    server = module.exports = express();

server.configure(function () {
    server.use(express["static"](__dirname + "/../public"));
    server.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));

    server.use(express.bodyParser());
    server.use(server.router);
});


server.get('/getOfferList', function (req, res) {
    res.send([
        {
            'id': 1,
            title: ' test offer one',
            offerType: 'deal',
            startDate: '2-13-04-16',
            endDate: '2013-10-10',
            popularity: 1
        },
        {
            'id': 2,
            title: ' test offer two',
            offerType: 'deal',
            startDate: '2-13-04-16',
            endDate: '2013-10-10',
            popularity: 1
        }
    ]);
});

server.get('/getOffer/:id', function (req, res) {
    res.send(
        {
            id: req.param('id'),
            title: 'This is a test offer with id = #' + req.param('id'),
            offerType: 'deal',
            startDate: '2-13-04-16',
            endDate: '2013-10-10',
            popularity: 1,
            description: 'this is my description'

        });
});

server.post('/updateOffer', function (req, res) {
    res.send('Offer created');
});

server.put('/updateOffer', function (req, res) {
    res.send('Offer updated');
});

server.delete('/updateOffer', function (req, res) {
    res.send('Offer updated');
});

http.createServer(server).listen(port);
console.log('Welcome to this Demo !\n\nPlease go to http://localhost:' + port + ' to start the demo');