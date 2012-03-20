This is an example Backbone.js application using the mediator pattern.
========================================================================

There are a number of outstanding issues with it. Do not use this code. This repository exists so I can ask questions on the newsgroup about this codebase.

Usage:
------
This application was built using the brunch.io tool.

To run the application use:

  `%> brunch server --watch`

Questions:
----------

Views:

* Should all subviews be initialized upfront, or lazily?
* How should you pass around DOM references for view `el`?
* Should you pass `el`, `$el`, or a selector?
* Should the DOM `$el` be cached within the view initializer, or once without the view `render` if it doesn't yet exist, or should you `$(selector)` it in render each time?