/*!
 * scratchpad - cross-browser scratchpad
 *
 * Copyright 2011, Alan Haggai Alavi (http://alanhaggai.org/)
 * Released under the GPL licence.
 *
 * Usage and documentation: see accompanying README.md
 */

var scratchpad = function(options) {
    var mouseDown     = false;
    var previousPoint = {};

    var width     = options.width     || 400;
    var height    = options.height    || 400;
    var thickness = options.thickness || 1;
    var colour    = options.colour    || options.color || '#000';
    var element   = options.element;

    var canvas = Raphael( $(element).get(0), width, height );

    // emulate a point
    var drawCircle = function( x, y ) {
        canvas.circle( x, y, thickness ).attr( {
            'stroke': colour,
            'fill'  : colour
        } );
    }

    $(element).mousedown( function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        mouseDown = true;
        drawCircle( x, y );
    } );

    $(element).mouseup( function() {
        mouseDown      = false;
        previousPoint = {};
    } );

    $(element).mousemove( function(e) {
        if (mouseDown) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;

            /*
             * Gaps appear between points when mouse is moved fast. As a
             * workaround, join current and previous points by a path.
             */
            canvas.path( 'M' + previousPoint.x + ' ' + previousPoint.y + 'L' + x + ' ' + y ).attr( {
                'stroke-width': thickness * 2 + 1,
                'stroke'      : colour
            } );

            drawCircle( x, y );
            previousPoint = { 'x': x, 'y': y };
        }
    } );

    return {
        'clear': function() { canvas.clear() }
    };
};
