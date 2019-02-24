#!/bin/sh -eu

cmd=$1
shift

case $cmd in
  sh) sh $@;;
  npm) npm $@;;
  yarn) yarn $@;;
  elm) npx elm $@;;
  watch) npm run watch $@;;
  build) npm run build $@;;
  test) npm t;;
  *) $cmd $@;;
esac
