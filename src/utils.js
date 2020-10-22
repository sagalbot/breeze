export const shouldAnimate = () =>
  window.matchMedia("not (prefers-reduced-motion)").matches;

export const nextTick = async () =>
  new Promise((resolve) =>
    setTimeout(() => window.requestAnimationFrame(() => resolve()), 25)
  );

/**
 * @param element {HTMLElement}
 * @return {*[]}
 */
export const getTransitionClasses = (element) =>
  [...element.classList].filter(
    (classname) =>
      classname.includes("transition") ||
      classname.includes("delay") ||
      classname.includes("duration")
  );

export const getFromClasses = (element) => {
  return hasAttribute(element, "x-breeze-from")
    ? element.attributes["x-breeze-from"].value.split(" ")
    : [];
};

export const getToClasses = (element) => {
  return hasAttribute(element, "x-breeze-to")
    ? element.attributes["x-breeze-to"].value.split(" ")
    : [];
};

export const hasAttribute = (element, attribute) => {
  return [...element.attributes].some(({ name }) => name === attribute);
};
