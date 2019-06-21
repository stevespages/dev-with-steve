:doc:`Home </index>` | :doc:`Express <../index>` | \
:doc:`Javascript and Jquery <../javascript-and-jquery>`

javascript-and-jquery-0_
========================

.. _javascript-and-jquery-0: ../../javascript-and-jquery

Importing front end scripts
---------------------------

The router module:

.. literalinclude:: ../../../routes/javascript-and-jquery.js
    :linenos:
    :language: javascript

The pug file has three script tags for fetching the jquery library, the jquery
script and the javascript script:

.. literalinclude:: ../../../views/javascript-and-jquery.pug
    :linenos:
    :language: pug

An html file produced from the pug file above using pug cli is shown below

.. literalinclude:: ../../../views/html/javascript-and-jquery.html
    :linenos:
    :language: html

The jquery library (jquery-3.4.1.min.js) has been downloaded to the \
public/javascripts directory and is imported with the first script tag. \
A human readable version of the library can be seen at jquery.com.

My javascript.js file was saved to /public/javascripts:

.. literalinclude:: ../../../public/javascripts/javascript.js
    :linenos:
    :language: javascript

My jquery.js file was saved to /public/javascripts/jquery.js

.. literalinclude:: ../../../public/javascripts/jquery.js
    :linenos:
    :language: jquery
