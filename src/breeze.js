import onEntrance from "./onEntrance.js";

import {
  getFromClasses,
  getToClasses,
  getTransitionClasses,
  nextTick,
  shouldAnimate,
} from "./utils.js";

/**
 * @param $el {HTMLElement}
 */
export function breeze($el) {
  if (!shouldAnimate()) {
    return { breeze: [] };
  }

  const breeze = [
    ...$el.querySelectorAll(":scope [x-breeze-from], :scope [x-breeze-to]"),
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

const scheduleEntrance = (element, from, to, transition) =>
  onEntrance(element, async (element) => {
    element.classList.add(...from);
    nextTick().then(() => {
      element.classList.add(...transition);
      element.classList.remove("invisible", ...from);
      element.classList.add(...to);
    });
  });
