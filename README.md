Scratchpad - *cross-browser scratchpad*
=======================================

**View [demo](http://alanhaggai.org/scratchpad/)**

Requirements
------------

* [jQuery](http://jquery.com/)
* [Raphaël](http://raphaeljs.com/)


Usage
-----

    var canvas = scratchpad( {
        'width'    : 400,
        'height'   : 400,
        'thickness': 10,
        'colour'   : '#ABC',
        'element'  : '#scratchpad'
    } );

    ...
    ...
    ...

    canvas.clear();


Properties
----------

* `width`: width of the scratchpad
* `height`: height of the scratchpad
* `thickness`: stroke thickness
* `colour`: stroke colour (`colour` and `color` are aliases) :-)
* `element` *(mandatory)*: the jQuery element which should be transformed into the
                           scratchpad

`element` is mandatory. All other properties are optional.


Object Methods
--------------

* `clear()`: clears the scratchpad
