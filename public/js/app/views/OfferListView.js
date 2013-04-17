define(["jquery", "backbone", "models/OfferModel", "collections/OfferCollection", "text!templates/offerList.html"],

    function ($, Backbone, Model, OfferList, template) {

        var View = Backbone.View.extend({
            el: ".content",
            initialize: function () {
                //this.render();
            },
            events: {
                'click .delete': 'deleteOffer'
            },

            render: function () {
                var offers = new OfferList();
                offers.url += '/' + this.options.page ;
                offers.fetch({
                    success: function () {
                        var html = _.template(template, {offers: offers});
                        $(".content").html(html);
                    }
                });

                return this;
            }

        });

        return View;

    }

);