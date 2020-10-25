import { onEntrance } from "./onEntrance.js";

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
    const requestFrameAndResolve = () =>
      window.requestAnimationFrame(() => resolve(element));

    if (element.complete) {
      console.log("image was completed");
      return requestFrameAndResolve();
    }

    loadImage(element)
      .then(() => {
        console.log("image was loaded");
        requestFrameAndResolve();
      })
      .catch(reject);
  });
};

/**
 *
 * @param {string} url The src attribute of an image
 * @param {HTMLImageElement} element The image element
 */
export const loadImage = (element) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(element);
    image.onerror = reject;
    image.src = element.src;
  });

export const scheduleEntrance = (element, from, to, transition) => {
  const entrance = [
    element,
    async () => beginEntrance(element, from, to, transition),
  ];

  if (isImage(element)) {
    return whenImageIsLoaded(element).then(() => {
      console.log("image is loaded");
      onEntrance(...entrance);
    });
  } else {
    return onEntrance(...entrance);
  }
};

export const beginEntrance = (element, from, to, transition) => {
  console.log("beginning entrance");
  element.classList.add(...from);
  nextTick().then(() => {
    element.classList.add(...transition);
    element.classList.remove("invisible", ...from);
    element.classList.add(...to);
  });
  console.log("completing entrance");
};
