// Collection.js
// -------------
define(["jquery", "backbone", "models/OfferModel"],

    function ($, Backbone, OfferModel) {

        // Creates a new Backbone Collection class object
        var Collection = Backbone.Collection.extend({
            page : 1,
            // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
            model: OfferModel,
            url: '/getOfferList'

        });

        // Returns the Model class
        return Collection;

    }

);