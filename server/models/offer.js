//offer model
module.exports = function (mongoose) {

    var OfferSchema = new mongoose.Schema({
        title: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String
        },
        startDate: {
            type: Date,
            default: Date.now
        },
        endDate: {
            type: Date
        },
        popularity: {
            type: Number,
            min: 0,
            default: 1
        }
    });

    var Offer = mongoose.model('Offer', OfferSchema);
    var errCallback = function (err) {
        if (err) {
            return console.log(err);
        } else {
            return console.log('Account created');
        }
    };

    var updateOffer = function (id, data) {
        Offer.update({id: id}, {$set: data}, {upsert: false}, errCallback);
    }

    var addOffer = function (data) {
        var item = new Offer(data);
        item.save(errCallback);
    }
    return {
        addOffer: addOffer,
        updateOffer: updateOffer,
        Offer: Offer
    }
}