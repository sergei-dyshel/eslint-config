import? '../../node_modules/@sergei-dyshel/prettier-config/export.just'
import? './node_modules/@sergei-dyshel/prettier-config/export.just'

_default:
    just --list

build:
    eslint-config-prettier index.js
