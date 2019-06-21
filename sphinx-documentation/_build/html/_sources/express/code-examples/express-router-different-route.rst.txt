:doc:`Home </index>`

different-route_
================

.. _different-route: ../different-route

Minimal use of express.Router
-----------------------------

This shows a minimal implementation of a route using the express.Router class. In this case the router module is /routes/different-route.js

.. literalinclude:: ../../routes/different-route.js
    :linenos:
    :language: javascript

Inside the app.js file we need to require the module using: ``const differentRouteRouter = require('./routes/different-route');`` and mount the module on a path using ``app.use('/different-route', differentRouteRouter');``
