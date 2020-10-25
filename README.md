# Breeze 💨

Breeze is a small HTML directive for transitioning elements into the viewport. 

- designed for use with TailwindCSS, but it'll work with any CSS framework
- works great with AlpineJS ~~and virtual DOM libraries~~

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

Breeze ships as an ES Module,  

- use the latest version: `https://unpkg.com/@sagalbot/breeze@latest/dist/breeze.js`
- or, you can specify a version: `https://unpkg.com/@sagalbot/breeze@0.4.3/dist/breeze.js`

```html
<script type="module">
    import {breeze} from "https://unpkg.com/@sagalbot/breeze@latest/dist/breeze.js";
    
    breeze(document.body);
</script>
```

## Browser Support

### IntersectionObserver

Breeze uses [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) under the hood to detect when an element has entered the viewport. 

IE does not support `IntersectionObserver`, Edge 16 was the first Edge release with support for the API. All the latest versions of Edge, Firefix, Chrome, Safari and Opera all support this API.

![image](https://user-images.githubusercontent.com/692538/97114238-a0080c00-16ac-11eb-9f25-f4a4f6877191.png)

[Source: caniuse.com](https://caniuse.com/mdn-api_intersectionobserver)

### ES Module

Breeze ships as an ES module to keep overhead as low as possible. If you're using a build tool like Webpack or Rollup, this won't impact you, but if you're adding the package via CDN, you will need ES module support in the browser. Support for ES modules in the browser is pretty on par with IntersectionObserver.

![image](https://user-images.githubusercontent.com/692538/97114322-1e64ae00-16ad-11eb-87aa-4a27d88dbd14.png)

[Source: caniuse.com](https://caniuse.com/es6-module)