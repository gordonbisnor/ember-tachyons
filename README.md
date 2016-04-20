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
	{{#t-profile-card-description fontSize=2 fontSize-l=1 fontWeight='bold'}}
		{{user.description}}
  {{/t-profile-card-description}}
{{/t-profile-card}}
```

#### Breakpoints

- `ns`: Not small
- `m`: Medium
- `l`: Large

#### Properties

##### Padding

- `padding`: Padding for top, left, right, bottom, and middle.
- `paddingTop`: Padding top.
- `paddingLeft`: Padding left.
- `paddingRight`: Padding right.
- `paddingBottom`: Padding bottom.

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

- `fontWeight`: Font size, 1 is the thinnest on the scale, 9 the boldest.

Values: `[1,2,3,4,5,6,7,8,9,'normal','bold']`

###### Examples

```hbs
{{#t-header fontWeight='normal' fontWeight-m=6 fontWeight-l='bold'}}
...
{{/t-header}}
```

```hbs
{{#t-profile-card fontWeight=4 fontWeight-ns=3}}
...
{{/t-profile-card}}
```

##### Opacity

- `opacity`: Opacity for a component, in 10% increments.

Values: `[10,20,30,40,50,60,70,80,90,100]`

###### Examples

```hbs
{{#t-header opacity='80' fontWeight-m=100}}
...
{{/t-header}}
```
