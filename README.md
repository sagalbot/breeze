# Breeze 💨

![Current Release](https://img.shields.io/github/release/sagalbot/breeze.svg?style=flat-square) 
![Release Date](https://img.shields.io/github/release-date/sagalbot/breeze?style=flat-square) 
![Minified Size](https://flat.badgen.net/bundlephobia/min/@sagalbot/breeze) 
![Minified + GZipped Size](https://flat.badgen.net/bundlephobia/minzip/@sagalbot/breeze) 

Breeze is a small JavaScript library for transitioning elements into the viewport. 

```html
<h1
    class="transition duration-1000 transform ease-in"
    x-breeze-from="opacity-0 translate-y-10"
>
    This one will fade in and up over 1000ms with TailwindCSS utility classes.
</h1>

<script type="module">
    // Load the library
    import { breeze } from "https://unpkg.com/@sagalbot/breeze@latest/dist/breeze.js";
    
    // Transition anything within the body
    breeze(document.body);
</script>
```

The API design was heavily influenced by TailwindCSS and AlpineJS _(which it works amazing with!)_, but is totally agnostic of any frameworks you might be using. Breeze just needs a root element and the classes you'll use for your transition.

- [Demo](https://breeze.sagalbot.com)
- [CodePen](https://codepen.io/sagalbot/pen/wvWgdjm?editors=1010)

## Install

### NPM

**yarn**
```shell
yarn add @sagalbot/breeze
```

**npm**
```shell
npm i @sagalbot/breeze
```

### CDN

Breeze ships as an ES Module, so you'll need to load it a bit differently than you might be used to.

```html
<script type="module">
    // Load the library
    import { breeze } from "https://unpkg.com/@sagalbot/breeze@latest/dist/breeze.js";
    
    // Transition anything within the body
    breeze(document.body);
</script>
```

- use the latest version: `https://unpkg.com/@sagalbot/breeze@latest/dist/breeze.js`
- or, you can specify a version: `https://unpkg.com/@sagalbot/breeze@0.4.3/dist/breeze.js`

## Usage / API

### 1. Provide Breeze a root element to initialize. 

Breeze will only apply entrance transitions to children of this element.

**NPM/Bundlers**: If you're bundling your code with something like webpack or rollup:

```js
import { breeze } from '@sagalbot/breeze'

breeze(document.body);
```

**CDN**: If you're using the CDN:

```html
<script type="module">
    // Load the library
    import { breeze } from "https://unpkg.com/@sagalbot/breeze@latest/dist/breeze.js";
    
    // Transition anything within the body
    breeze(document.body);
</script>
```

### 2. Set directives within your HTML.

You'll mainly interact with Breeze via custom attributes on HTMLElements. We'll refer to these as directives.

Breeze has a few directives available:

- `x-breeze-from`: A set of one or more CSS classes that define the starting point for your transition. 
- `x-breeze-to`: A set of one or more CSS classes that define the end state for your transition.

**x-breeze-from**

```html
<h1
    class="transition duration-1000 transform ease-in"
    x-breeze-from="opacity-0 translate-y-5"
>
    This one will fade in and up over 1000ms with TailwindCSS utility classes.
</h1>
```

When using `x-breeze-from`, you usually won't need to set an `x-breeze-to` state. `x-breeze-from` classes are added immediately when the element appears in the viewport, and then removed on the next animation frame. In the example above, we don't need to explicitly set `x-breeze-to="opacity-100"` because that is the elements default opacity – as soon as `opacity-0` is removed from the `classList`, the element will being to transition in.

**x-breeze-to**

```html
<h1
    class="transition duration-1000 transform ease-in"
    x-breeze-to="translate-y-10"
>
    This one translate down in the viewport as it enters.
</h1>
```

When using `x-breeze-to` without setting `x-breeze-from`, whatever you set in `class` should be considered the initial state. When the element enters the viewport, the classes in `x-breeze-to` will be added to the element.

## Browser Support

### IntersectionObserver

Breeze uses [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) under the hood to detect when an element has entered the viewport. 

IE does not support `IntersectionObserver`, Edge 16 was the first Edge release with support for the API. All the latest versions of Edge, Firefix, Chrome, Safari and Opera all support this API.

![image](https://user-images.githubusercontent.com/692538/97114238-a0080c00-16ac-11eb-9f25-f4a4f6877191.png)

[Source: caniuse.com](https://caniuse.com/mdn-api_intersectionobserver)

### ES Module

Breeze ships as an ES module to keep overhead as low as possible. If you're using a build tool like Webpack or Rollup, this won't impact you, but if you're adding the package via CDN, you will need ES module support in the browser. Support for ES modules in the browser is pretty on par with IntersectionObserver.

![image](https://user-images.githubusercontent.com/692538/97114534-46084600-16ae-11eb-89bb-e3fc5b7b01b6.png)

[Source: caniuse.com](https://caniuse.com/es6-module)
