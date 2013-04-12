(function ( ua, w, d, undefined )
{

    // App Environment
    // ---------------
    //  Tip: Set to true to turn on "production" mode
    var production = true,

    // Configuration object that will contain the correct prod/dev CSS and JavaScript files to load
        config = {}

    // Mobile/Tablet Logic
    if( (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test( ua ) )
    {

        // Mobile/Tablet CSS and JavaScript files to load
        config = {

            // CSS files that are loaded when in development mode
            "dev-css": ["css/mobile.css"],

            // CSS files that are loaded when in production mode
            "prod-css": ["css/mobile.min.css"],

            // JavaScript files that are loaded when in development mode
            "dev-js": [
                { "data-main": "js/app/config/MobileInit.js", "src": "js/libs/require.js" }
            ],

            // JavaScript files that are loaded when in production mode
            "prod-js": ["js/app/config/MobileInit.min.js"]

        };

    }

    // Desktop Logic
    else
    {

        // Desktop files to load
        config = {

            // Loaded when not in production mode
            "dev-css": ["css/desktop.css"],

            // Loaded when in production mode
            "prod-css": ["css/desktop.min.css"],

            // Loaded when not in production mode
            "dev-js": [
                { "data-main": "js/app/config/DesktopInit.js", "src": "js/libs/require.js" }
            ],

            // Loaded when in production mode
            "prod-js": ["js/app/config/DesktopInit.min.js"]

        }

    }

    // Loads the correct CSS and JavaScript files
    loadFiles( config );

    function loadCSS( urls, callback )
    {

        var x, link;

        for( x = 0; x <= urls.length - 1; x += 1 )
        {

            link = d.createElement( "link" );

            link.type = "text/css";

            link.rel = "stylesheet";

            link.href = urls[x];

            d.getElementsByTagName( "head" )[0].appendChild( link );

        }

        if( callback )
        {
            callback();
        }

    }

    function loadJS( files, callback )
    {

        var x, script, file;

        for( x = 0; x <= files.length - 1; x += 1 )
        {

            file = files[x];

            script = d.createElement( "script" );

            if( ((typeof file).toLowerCase()) === "object" && file["data-main"] !== undefined )
            {

                script.setAttribute( "data-main", file["data-main"] );

                script.async = true;

                script.src = file.src;

            }

            else
            {

                script.src = file;

            }

            d.getElementsByTagName( "head" )[0].appendChild( script );

        }

        if( callback )
        {
            callback();
        }

    }

    function loadFiles( obj, callback )
    {

        if( production )
        {

            // Loads the production CSS file(s)
            loadCSS( obj["prod-css"], function ()
            {

                // If there are production JavaScript files to load
                if( obj["prod-js"] )
                {

                    // Loads the correct initialization file (which includes Almond.js)
                    loadJS( obj["prod-js"], callback );

                }

            } );

        }

        // Else if your app is in development mode
        else
        {

            // Loads the development CSS file(s)
            loadCSS( obj["dev-css"], function ()
            {

                // If there are development Javascript files to load
                if( obj["dev-js"] )
                {

                    // Loads Require.js and tells Require.js to find the correct intialization file
                    loadJS( obj["dev-js"], callback );

                }

            } );

        }

    }

})( navigator.userAgent || navigator.vendor || window.opera, window, window.document );