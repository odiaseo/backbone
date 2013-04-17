define(["jquery", "backbone", "models/OfferModel", "text!templates/offerAdd.html"],

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
                var html = _.template(template, {});
                this.$el.html(html);
                return this;
            },

            submit: function (e) {
                e.preventDefault();
                var offer = new OfferModel({
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