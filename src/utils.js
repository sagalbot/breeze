export const loaded = [];

export const shouldAnimate = () =>
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

export const nextTick = () =>
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

/**
 * Determine if a given element is an image.
 * @param {HTMLElement} element
 */
export const isImage = (element) => element instanceof HTMLImageElement;

/**
 * Return a promise when an image is loaded.
 * @param {HTMLImage} element
 */
export const whenImageIsLoaded = (element) => {
  return new Promise((resolve, reject) => {
    if (element.complete) {
      return resolve(element);
    }
    loadImage(element).then(() => resolve(element)).catch(reject);
  });
};

/**
 *
 * @param {string} url The src attribute of an image
 * @param {HTMLImageElement} element The image element
 */
export const loadImage = (element) =>
  new Promise((resolve, reject) => {
    element.onload = () => resolve(element);
    element.onerror = reject;
  });
