:doc:`Home </index>`

express.Router
==============

Routes and the handlers associated with them can be defined in `app.js`. This could lead to a very large file. A router can be created as a module. This can have middleware as well as some routes.
A Code Example is given here of a router with one route in it and no middleware.

Code Example: different-route_

.. _different-route: ./different-route

.. literalinclude:: ../routes/different-route.js
    :linenos:
    :language: javascript

This shows a minimal implementation of a route using the express.Router class.
