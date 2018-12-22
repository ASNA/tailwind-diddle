#!/usr/bin/env bash

docker run -it --rm -v $(pwd):/var/www/html -w /var/www/html node:latest ./tw-build.sh
