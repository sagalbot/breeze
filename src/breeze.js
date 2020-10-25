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
 * @return {{breeze: []}|{breeze: {fromClasses: *, toClasses: *, transitionClasses: *[], element: *}[]}}
 */
export function breeze($el) {
  if (!shouldAnimate()) {
    return { breeze: [] };
  }

  const breeze = [
    ...$el.querySelectorAll(":scope [x-breeze-from], :scope [x-breeze-to]"),
  ].map((element) => {
    const transitionClasses = getTransitionClasses(element);
    const fromClasses = getFromClasses(element);
    const toClasses = getToClasses(element);

    element.classList.add("invisible");
    element.classList.remove(...transitionClasses);

    onEntrance(element, async (element) => {
      element.classList.add(...fromClasses);
      nextTick().then(() => {
        element.classList.add(...transitionClasses);
        element.classList.remove("invisible", ...fromClasses);
        element.classList.add(...toClasses);
      });
    });

    return { element, fromClasses, toClasses, transitionClasses };
  });

  return { breeze };
}
