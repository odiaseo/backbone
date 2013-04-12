(function ( ua, w, d, undefined )
{
    var production = false, config = {};

    if( (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test( ua ) )
    {
        config = {
            "dev-css": ["css/mobile.css"],
            "prod-css": ["css/mobile.min.css"],
            "dev-js": [
                {
                    "data-main": "js/app/config/MobileInit.js",
                    "src": "js/libs/require.js"
                }
            ],
            "prod-js": ["js/app/config/MobileInit.min.js"]
        };
    }
    else
    {
        config = {
            "dev-css": ["css/desktop.css"],
            "prod-css": ["css/desktop.min.css"],
            "dev-js": [
                {
                    "data-main": "js/app/config/DesktopInit.js",
                    "src": "js/libs/require.js"
                }
            ],
            "prod-js": ["js/app/config/DesktopInit.min.js"]
        }
    }

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
            loadCSS( obj["prod-css"], function ()
            {
                if( obj["prod-js"] )
                {
                    loadJS( obj["prod-js"], callback );
                }
            } );

        }
        else
        {
            loadCSS( obj["dev-css"], function ()
            {
                if( obj["dev-js"] )
                {
                    loadJS( obj["dev-js"], callback );
                }
            } );
        }
    }
})( navigator.userAgent || navigator.vendor || window.opera, window, window.document );