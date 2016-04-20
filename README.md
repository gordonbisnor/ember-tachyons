# ember-[tachyons](http://tachyons.io)

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
	{{#t-profile-card-description f=2 fw='bold'}}
		{{user.description}}
  {{/t-profile-card-description}}
{{/t-profile-card}}
```

#### Breakpoints

- `all`: All breakpoints (unless otherwise specified with another breakpoint)
- `ns`: Not small
- `m`: Medium
- `l`: Large

#### Properties

##### Padding

- `p`: Padding for top, left, right, bottom, and middle.
- `pt`: Padding top.
- `pl`: Padding left.
- `pr`: Padding right.
- `pb`: Padding bottom.
- `pv`: Padding vertical (top and bottom).
- `ph`: Padding horizontal (left and right).

Values: `[0,1,2,3,4,5,6]`

##### Margin

- `margin`: Margin for top, left, right, bottom, and middle.
- `marginTop`: Margin top.
- `marginLeft`: Margin left.
- `marginRight`: Margin right.
- `marginBottom`: Margin bottom.

Values: `[0,1,2,3,4,5,6]`

##### Font Size

- `fontSize`: Font size, 1 is the largest on the scale, 6 the smallest.

Values: `[1,2,3,4,5,6,'subheadline','headline']`

###### Examples

```hbs
{{#t-header fontSize=2 fontSize-m=1 fontSize-l='subheadline'}}
...
{{/t-header}}
```

```hbs
{{#t-profile-card fontSize=4 fontSize-ns=3}}
...
{{/t-profile-card}}
```

##### Font Weight

- `fw`: Font size, 1 is the thinnest on the scale, 9 the boldest.

Values: `[1,2,3,4,5,6,7,8,9]`

##### Opacity

- `o`: Opacity for a component, in 10% increments.

Values: `[10,20,30,40,50,60,70,80,90,100]

