var express = require("express"),
    http = require("http"),
    mongoose = require('mongoose'),
    port = (process.env.PORT || 8001),
    dbPath = 'mongodb://localhost/nodebackbone',
    server = module.exports = express();

// Import the models
var models = {
    Offer: require("./models/offer")(mongoose)
};

server.configure(function () {
    server.use(express["static"](__dirname + "/../public"));
    server.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));

    server.use(express.bodyParser());
    server.use(server.router);
    mongoose.connect(dbPath, function onMongooseError(err) {
        if (err) throw err;
    });
});


server.get('/getOfferList/:page?', function (req, res) {
    var offers = models.Offer.find();
    res.send(offers);
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
    var out = models.Offer.addOffer(req.body);
    res.send(out);
});

server.put('/updateOffer', function (req, res) {
    var out = Offer.addOffer();
    res.send(out);
});

server.delete('/updateOffer', function (req, res) {
    res.send('Offer updated');
});

http.createServer(server).listen(port);
console.log('Welcome to this Demo !\n\nPlease go to http://localhost:' + port + ' to start the demo');