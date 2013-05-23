#!/usr/bin/sh
# Assuming you store jscoverage binary in ../../lib and that you have source files in ../app, and your tests named *.tests*.js locally:
export app_cov=1
../../lib/jscoverage --no-highlight ../app ../app_cov
mocha -R html-cov *.tests*js >coverage.html
