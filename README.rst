Website Starter
===============

Create directory::

  $ mkdir website-starter

Initialize npm::

  $ npm init
  entry point: (index.js) src/index.js

Install basic dependencies::

  $ npm install webpack --save-dev
  $ npm install babel-loader@5.3.2 --save-dev
  $ npm install html-webpack-plugin --save-dev

Create webpack configuration file::

  ...

Install dependencies::

  $ npm install bootstrap
  $ npm install jquery



Page Speed Insights
-------------------

Install PSI globally::

  $ npm install --save psi

WebPageTest
-----------

Install WebPageTest globally:

  $ npm install webpagetest -g

Request WebPageTest API key at...

Export WebPageTest API key on command line::

  $ export WEBPAGETEST_API_KEY=<INSERT_API_KEY_HERE>

Run WebPageTest:

  $ npm run webpagetest

Image Optimization
------------------

  $ npm install image-webpack-loader --save-dev


Deployment
----------

Deploy to Heroku.

Create Heroku instance::

  $ heroku create

Push repository to Heroku::

  $ git push heroku master

