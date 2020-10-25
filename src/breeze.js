import {
  shouldAnimate,
  getToClasses,
  getFromClasses,
  getTransitionClasses,
  scheduleEntrance,
} from "./utils.js";

import { merge } from "./config.js";

/**
 * @param $el {HTMLElement}
 */
export function breeze($el, config = {}) {
  if (!shouldAnimate()) {
    return { breeze: [] };
  }

  config = merge(config);

  const breeze = [
    ...$el.querySelectorAll(    
      `:scope [${config.directive}-from], :scope [${config.directive}-to]`
    ),
  ].map((element) => {
    const transition = getTransitionClasses(element);
    const from = getFromClasses(element);
    const to = getToClasses(element);

    element.classList.add("invisible");
    element.classList.remove(...transition);

    const entrance = [element, from, to, transition];

    scheduleEntrance(...entrance);

    return { element, from, to, transition };
  });

  return { breeze };
}
