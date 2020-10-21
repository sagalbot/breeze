import onEntrance from "./onEntrance.js";
import { animate, transitionTo, transitionFrom } from "./animate.js";

/**
 * Usage: x-init="animateIn('fade')"
 */
export const enterAnimation = (animation, threshold = null) => {
  return function () {
    this.$el.classList.add("invisible");

    onEntrance(
      this.$el,
      async ($el) => await animate($el, animation),
      threshold
    );
  };
};

/**
 * Usage: x-init="transitionTo('scale-x-100')"
 */
export const enterTransitionTo = (animation, threshold = null) => {
  return function () {
    this.$el.classList.add("invisible");

    onEntrance(
      this.$el,
      async ($el) => await transitionTo($el, animation),
      threshold
    );
  };
};

/**
 * Usage: x-init="enterTransition().from('opacity-0').to('opacity-100')"
 */
export const enterTransition = (threshold = null) => ({
  from: (fromClasses) => ({
    to: (toClasses) =>
      function () {
        transition(this.$el, fromClasses, toClasses, threshold);
      },
  }),
});

export const transition = ($el, fromClasses, toClasses, threshold = null) => {
  $el.classList.add("invisible");

  //  Remove any transition classes so that the initial state is not
  //  transitioned to, rather triggered immediately
  const transition = [...$el.classList].filter((classname) =>
    classname.includes("transition")
  );
  $el.classList.remove(...transition);

  //  Set initial state
  $el.classList.add(...fromClasses.split(" "));

  setTimeout(async () => {
    $el.classList.add(...transition);
    onEntrance(
      $el,
      async ($el) => await transitionFrom($el, fromClasses, toClasses),
      threshold
    );
  }, 0);
};

export const alpineDirective = () => {
  [...document.querySelectorAll("[x-breeze]")].forEach(($el) => {
    try {
      const value = $el.attributes["x-breeze"].value.replace(/'/g, '"');
      const { from, to, threshold = null } = (0, eval)("(" + value + ")");
      transition($el, from, to, threshold);
    } catch (e) {
      console.log(e);
    }
  });
};
