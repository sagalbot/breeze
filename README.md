## Usage with AlpineJS

_Breezy doesn't expose anything to `window`, so you'll have to add it yourself_.

```
import { enterTransition } from "@sagalbot/breeze";

/**
 * Usage: x-init="enterTransition().from('opacity-0').to('opacity-100')"
 */
window.enterTransition = enterTransition;
```

Now, in your markup:

```
<h1
  class="transform duration-200"
  x-data="{}"
  x-init="enterTransition().from('opacity-0 scale-110 translate-y-10').to('opacity-100 scale-100 translate-y-0')"
>
    Easy, Breezy entrances!
</h1>
```

https://codepen.io/sagalbot/pen/xxOEPaJ?editors=1010