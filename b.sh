#!/usr/bin/env bash

ng build --env=prod \
    && rm -rf ./docs/ \
    && git checkout -- docs/CNAME \
    && cp -r ./dist/ ./docs/
