define(["jquery", "backbone", "models/Model", "views/View", "collections/Collection"],
    function($, Backbone, Model, View, Collection) {
        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {
                Backbone.history.start();
            },

            // All of your Backbone Routes (add more)
            routes: {
                "": "index"
            },
            index: function() {
                new View();
            }
        });
        return DesktopRouter;

    }

);