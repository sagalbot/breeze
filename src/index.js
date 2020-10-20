import onEntrance from './onEntrance';
import { transitionFrom } from './animate';

export const transition = ($el, threshold = null) => ({
  from: (fromClasses) => ({
    to: (toClasses) =>
      function () {
        $el.classList.add('invisible');

        //  Remove any transition classes so that the initial state is not
        //  transitioned to, rather triggered immediately
        const transition = [...$el.classList].filter(
          (classname) =>
            classname.includes('transition') ||
            classname.includes('duration') ||
            classname.includes('delay'),
        );
        $el.classList.remove(...transition);

        //  Set initial state
        $el.classList.add(...fromClasses.split(' '));

        setTimeout(async () => {
          $el.classList.add(...transition);
          onEntrance(
            $el,
            async () => await transitionFrom($el, fromClasses, toClasses),
            threshold,
          );
        }, 0);
      },
  }),
});

