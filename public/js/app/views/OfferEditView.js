define(["jquery", "backbone", "models/OfferModel", "text!templates/offerEdit.html"],

    function ($, Backbone, OfferModel, template) {
        var View = Backbone.View.extend({
            el: ".content",
            initialize: function () {
                //this.render();
            },
            events: {
                'submit form': 'submit'
            },

            render: function () {


                var offer = new OfferModel();
                offer.url += this.id;
                offer.fetch({
                    success: function () {
                        var html = _.template(template, {offer: offer});
                        $(".content").html(html);
                    }
                });

                return this;
            },

            submit: function (e) {
                e.preventDefault();
                var offer = new OfferModel({
                    id: this.$('input[name=id]').val(),
                    title: this.$('input[name=title]').val(),
                    description: this.$('textarea[name=description]').val()
                });
                offer.url = '/updateOffer';
                offer.save();

                Backbone.history.navigate('#list', true);
            }

        });

        return View;

    }
);