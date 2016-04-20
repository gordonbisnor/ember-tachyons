# ember-[tachyons](http://tachyons.io) [![Build Status](https://travis-ci.org/johnotander/ember-tachyons.svg?branch=master)](https://travis-ci.org/johnotander/ember-tachyons)

__Work in progress__

A 100% mobile-first, responsive UI library for building ambitious Ember applications.

## Installation

```sh
ember install ember-tachyons
```

## Usage

#### Header

```hbs
{{#t-header}}
  {{#t-header-nav class="fl"}}
    {{#t-header-nav-item}}
      {{link-to 'ember-tachyons' class="link dim black"}}
    {{/t-header-nav-item}}
  {{/t-header-nav}}
  {{#t-header-nav-right class="fr tr"}}
    {{#t-header-nav-item}}
      {{link-to 'docs' class="link dim black"}}
    {{/t-header-nav-item}}
    {{#t-header-nav-item}}
      <a href="https://github.com/johnotander/ember-tachyons" class="link dim black">github</a>
    {{/t-header-nav-item}}
  {{/t-header-nav}}
{{/t-header}}
```

#### Cards

##### t-card

```hbs
{{#t-card}}
  <h3 class="ma0 pa0">Hello, I'm a <code class="o-80">t-card</code></h3>
  <p class="f6 f5-ns lh-copy measure">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
    vero eos et accusam et justo duo dolores et ea rebum.
  </p>
{{/t-card}}
```
