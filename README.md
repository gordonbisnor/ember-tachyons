# ember-[tachyons](http://tachyons.io) [![Build Status](https://travis-ci.org/johnotander/ember-tachyons.svg?branch=master)](https://travis-ci.org/johnotander/ember-tachyons)

__Work in progress__

A 100% mobile-first, responsive UI library for building ambitious Ember applications.

## Installation

```sh
ember install ember-tachyons
```

## Usage

```hbs
{{#t-profile-card}}
	{{#t-profile-card-title}}
		{{user.name}}
  {{/t-profile-card-title}}
	{{#t-profile-card-description fontSize=2 fontSize-l=1 fontWeight='bold'}}
		{{user.description}}
  {{/t-profile-card-description}}
{{/t-profile-card}}
```

