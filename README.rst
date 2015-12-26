.. image:: https://travis-ci.org/kitconcept/website-starter-performance.svg?branch=master
    :target: https://travis-ci.org/kitconcept/website-starter-performance

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

Install image-webpack-loader::

  $ npm install image-webpack-loader --save-dev

Enable image-webpack-loader for all images ("webpack.config.js")::

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(png|jpg|ico)$/,
        loaders: [
            'file-loader?name=[name].[ext]',
            'image-webpack?progressive=true&bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    ]
  }


Deployment
----------

Deploy to Heroku.

Create Heroku instance::

  $ heroku create

Push repository to Heroku::

  $ git push heroku master


Travis Integration
------------------

Create a Travis CI configuration file (".travis.yml")::

  language: node_js
  node_js:
  - 4.2.1
  install:
  - npm install psi -g
  - npm install webpagetest -g
  script:
  - psi psi.kitconcept.com --threshold 99
  - webpagetest test http://psi.kitconcept.com  -k $WPT_API_KEY --poll --specs testspecs.json --reporter spec
  notifications:
    email:
    - tisto@plone.org

Install Travis command line client::

  $ gem install travis

Store the encrypted WebPageTest API Key in your .travis.yml::

  $ travis encrypt WPT_API_KEY=<YOUR_SECRET_API_KEY> --add

This will append an encrypted API key to your .travis.yml so that it looks like this::

  language: node_js
  node_js:
  - 4.2.1
  install:
  - npm install psi -g
  - npm install webpagetest -g
  script:
  - psi psi.kitconcept.com --threshold 99
  - webpagetest test http://psi.kitconcept.com  -k $WPT_API_KEY --poll --specs testspecs.json --reporter spec
  notifications:
    email:
    - tisto@plone.org
  env:
    global:
      secure: qlP9/bsYvgu49v3V7BTQ0uKe/0WaPr3AokhXDDECcc1SvbhQqfbU5/xPtaExlntHM1zesFM9WK667zWA2OnZbA3HAeQOHVuaipCJejK6yn/cxW5/JA2v0JlHrVQ357i8emSH8VwckSbweWrsDYA1YTRY7xs91sFGKTNYLiWUlc3ZxFq71MYvBC9fbTFPdqkZzW0tIpIFVtwO7BRgYtYviIkL1FygyxNPEEt4VHM/jG9l7NtEqi5LIKb8amfcMM4gRmdbyleLQdjXs5F/MzE8v9RFXppuElWbdPHti48B1w89ba2FrJfXNmdL26zR/QxWrsjNn29lzxs3K9K2/ar3zQTOmVcltjF5bM1EbytINWnsdXVwKGAwt8cbseNcv/Q5P6CL6fBgmkbDNcSV4ZbVoFamRIeX1LAJC74INpA8Zid+ul2pdnnYVCOWY0MtXmHOigL/bHNcvrjrFEmX76GvJOT/twceEWHn/6O5s3LFySKzeYEW/NH+aW4ifFGHcTRxcjKhdEyAp2GEEjyinoDILdr8Ic2pzLUawkZOr6zGregXw679rvHHFhH9NITPJVdUsL9jQU1J6ZAXsBT1YxC8Jso/QHsulCCPvQeAGAi6ZwJWZGIOyyOJ5/mokkAMXBo70AdQiuA3s9wK+YrIRM0Q5TDWZcUTFgz1JvyA0YUKi58=

Enable Travis build.


