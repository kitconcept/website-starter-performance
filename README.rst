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



Performance
-----------

Install PSI globally::

  $ npm install --save psi

Deployment
----------

Deploy to Heroku.

Create Heroku instance::

  $ heroku create

Push repository to Heroku::

  $ git push heroku master

