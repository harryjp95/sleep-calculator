rm -rf bundle js dist \
&& tsc \
&& cp src/index.html src/styles/*.scss js \
&& parcel build js/index.html --out-dir bundle \
&& mkdir dist \
&& mv bundle/index.html js/handler.js dist/ \
&& rm -rf js bundle