const defaultThreshold = () => {
  return window.matchMedia("(min-width: 768px)").matches ? 0.25 : 0.5;
};

/**
 *
 * @param $el
 * @param callback
 * @param threshold {Number|Function}
 * @return {boolean}
 */
export function onEntrance($el, callback, threshold = null) {
  /**
   * @param {IntersectionObserverEntry} entry
   */
  const whenEntering = ([entry]) => {
    if (entry.isIntersecting) {
      callback($el);
      observer.disconnect();
    }
  };

  /**
   * On small screens, require 50% of the content to be
   * visible before animating.
   * @type {number}
   */
  if (!threshold) {
    threshold = defaultThreshold();
  } else if (typeof threshold === "function") {
    threshold = threshold();
  }

  // eslint-disable-next-line
  const observer = new IntersectionObserver(whenEntering, { threshold });
  observer.observe($el);
};
