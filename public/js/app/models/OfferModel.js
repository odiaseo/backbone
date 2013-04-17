define(["jquery", "backbone"],

    function ($, Backbone) {

        // Creates a new Backbone Model class object
        var OfferModel = Backbone.Model.extend({
            url: '/getOffer/',

            // Model Constructor
            initialize: function () {

            },

            // Default values for all of the Model attributes
            defaults: {
                endDate: '2013-10-10',
                popularity: 1
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function (attrs) {

            }

        });

        // Returns the Model class
        return OfferModel;

    }
);