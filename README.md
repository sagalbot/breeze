# Breeze 💨

Breeze is a small JavaScript library for transitioning elements into the viewport. The API design was heavily influenced by TailwindCSS and AlpineJS (which it works amazing with!), but is totally agnostic of any frameworks you might be using. Just give Breeze a root `element`, some classes, and you'll be transitioning in your elements in no time.

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