/**
 * @param $el {HTMLElement}
 * @param animation {String} Any valid Animate.css animation name
 */
export const animate = ($el, animation) => {
  return new Promise((resolve, reject) => {
    $el.addEventListener(
      "animationend",
      () => {
        $el.classList.remove("animated", ...animation.split(" "));
        resolve($el);
      },
      { once: true }
    );
    $el.classList.remove("invisible");
    $el.classList.add("animated", ...animation.split(" "));
  });
};

/**
 * @param $el {HTMLElement}
 * @param animation {String} List of tailwind classes to add when an element enters.
 */
export const transitionTo = ($el, animation) => {
  return new Promise((resolve, reject) => {
    $el.addEventListener(
      "transitionend",
      (transition) => resolve($el, transition),
      { once: true }
    );
    $el.classList.remove("invisible");
    $el.classList.add(...animation.split(" "));
  });
};

/**
 * @param $el {HTMLElement}
 * @param transitionFrom Classes to add before an element is visible.
 * @param transitionTo Classes to add immediately after making the element visible.
 */
export const transitionFrom = ($el, transitionFrom, transitionTo) => {
  return new Promise((resolve, reject) => {
    $el.classList.remove("invisible");
    $el.addEventListener(
      "transitionend",
      (transition) => resolve($el, transition),
      { once: true }
    );
    $el.classList.add(...transitionTo.split(" "));
    $el.classList.remove(...transitionFrom.split(" "));
  });
};
