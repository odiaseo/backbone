require.config({
  baseUrl: "./js",
  paths: {
      "jquery": "libs/jquery",
      "jqueryui": "libs/jqueryui",
      "underscore": "libs/lodash",
      "backbone": "libs/backbone",

      // Plugins
      "backbone.validateAll": "libs/plugins/Backbone.validateAll",
      "bootstrap": "libs/plugins/bootstrap",
      "text": "libs/plugins/text",

      // Application Folders
      "collections": "app/collections",
      "models": "app/models",
      "routers": "app/routers",
      "templates": "app/templates",
      "views": "app/views"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {
      "bootstrap": ["jquery"],
      "jqueryui": ["jquery"],
      "backbone": {
        "deps": ["underscore", "jquery"],
        "exports": "Backbone"
      },
      "backbone.validateAll": ["backbone"]
  }

});


require(["jquery", "backbone", "routers/DesktopRouter", "jqueryui", "bootstrap", "backbone.validateAll"],
  function($, Backbone, DesktopRouter) {
    new DesktopRouter();
  }
);