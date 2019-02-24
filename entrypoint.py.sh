#!/bin/sh -eu

cmd=$1
shift

case $cmd in
  sh) sh $@;;
  python) python $@;;
  pip) pip $@;;
  gen) python generator.py $@;;
  *) $cmd $@;;
esac
