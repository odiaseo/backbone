define(["jquery", "backbone", "text!templates/index.html"],

    function($, Backbone,  template){
        var View = Backbone.View.extend({
            el: ".content",
            initialize: function() {
                this.render();
            },
            events: {

            },

            render: function() {
                this.template = _.template(template, {});
                this.$el.html(this.template);
                return this;
            }

        });

        return View;

    }

);