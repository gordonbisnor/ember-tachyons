# ember-[tachyons](http://tachyons.io) [![Build Status](https://travis-ci.org/johnotander/ember-tachyons.svg?branch=master)](https://travis-ci.org/johnotander/ember-tachyons)

__Work in progress__

A 100% mobile-first, responsive UI library for building ambitious Ember applications.

## Installation

```sh
ember install ember-tachyons
```

## Usage

```hbs
{{#t-header class="bb b--black-10 cf"}}
  {{#t-header-nav class="fl"}}
    {{#t-header-nav-item}}
      {{link-to 'ember-tachyons' class="link dim black"}}
    {{/t-header-nav-item}}
  {{/t-header-nav}}
  {{#t-header-nav class="fr tr"}}
    {{#t-header-nav-item}}
      {{link-to 'docs' class="link dim black"}}
    {{/t-header-nav-item}}
    {{#t-header-nav-item}}
      <a href="https://github.com/johnotander/ember-tachyons" class="link dim black">github</a>
    {{/t-header-nav-item}}
  {{/t-header-nav}}
{{/t-header}}
```

