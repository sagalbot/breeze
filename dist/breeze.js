function e(e,t,r,n,s,i,o){try{var a=e[i](o),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(n,s)}var t=()=>window.matchMedia("(min-width: 768px)").matches?.25:.5,r=(e,t)=>[...e.attributes].some((e=>{var{name:r}=e;return r===t}));function n(n){return window.matchMedia("(prefers-reduced-motion: no-preference)").matches?{breeze:[...n.querySelectorAll(":scope [x-breeze-from], :scope [x-breeze-to]")].map((n=>{var s=(e=>[...e.classList].filter((e=>e.includes("transition")||e.includes("delay")||e.includes("duration"))))(n),i=(e=>r(e,"x-breeze-from")?e.attributes["x-breeze-from"].value.split(" "):[])(n),o=(e=>r(e,"x-breeze-to")?e.attributes["x-breeze-to"].value.split(" "):[])(n);return n.classList.add("invisible"),n.classList.remove(...s),function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=t=>{var[n]=t;n.isIntersecting&&(r(e),i.disconnect())};n?"function"==typeof n&&(n=n()):n=t();var i=new IntersectionObserver(s,{threshold:n});i.observe(e)}(n,function(){var t,r=(t=function*(e){e.classList.add(...i),new Promise((e=>setTimeout((()=>window.requestAnimationFrame((()=>e()))),25))).then((()=>{e.classList.add(...s),e.classList.remove("invisible",...i),e.classList.add(...o)}))},function(){var r=this,n=arguments;return new Promise((function(s,i){var o=t.apply(r,n);function a(t){e(o,s,i,a,c,"next",t)}function c(t){e(o,s,i,a,c,"throw",t)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}()),{element:n,fromClasses:i,toClasses:o,transitionClasses:s}}))}:{breeze:[]}}export{n as breeze};
