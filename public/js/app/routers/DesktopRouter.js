define(["jquery", "backbone", "models/OfferModel", "collections/OfferCollection", "views/IndexView", "views/OfferListView", "views/OfferEditView", "views/OfferAddView"],
    function ($, Backbone, OfferModel, Collection, IndexView, OfferListView, OfferEditView, OfferAddView) {
        var DesktopRouter = Backbone.Router.extend({

            currentView: null,
            initialize: function () {
                Backbone.history.start();
            },

            // All of your Backbone Routes (add more)
            routes: {
                "": "index",
                "list": "list",
                "edit/:id": "edit",
                "add": "add",
                "delete/:id": "deleteOffer"
            },

            changeView: function (view) {
                if (null != this.currentView) {
                    this.currentView.undelegateEvents();
                }
                this.currentView = view;
                this.currentView.render();
            },

            add: function () {
                this.changeView(new OfferAddView());
            },

            edit: function (id) {
                this.changeView(new OfferEditView({id: id}));
            },

            list: function () {
                this.changeView(new OfferListView());
            },

            index: function () {
                this.changeView(new IndexView());
            },

            deleteOffer: function (id) {
                alert('offer deleted');
                Backbone.history.navigate('#list', true);
            }

        });


        return DesktopRouter;

    }

);