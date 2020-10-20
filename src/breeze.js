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
        this.$el.classList.add("invisible");

        //  Remove any transition classes so that the initial state is not
        //  transitioned to, rather triggered immediately
        const transition = [...this.$el.classList].filter(
          (classname) =>
            classname.includes("transition") ||
            classname.includes("duration") ||
            classname.includes("delay")
        );
        this.$el.classList.remove(...transition);

        //  Set initial state
        this.$el.classList.add(...fromClasses.split(" "));

        setTimeout(async () => {
          this.$el.classList.add(...transition);
          onEntrance(
            this.$el,
            async ($el) => await transitionFrom($el, fromClasses, toClasses),
            threshold
          );
        }, 0);
      },
  }),
});
