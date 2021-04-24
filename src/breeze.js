import { parseElementAndScheduleEntrance, shouldAnimate } from "./utils.js";

/**
 * @param $el {HTMLElement}
 */
export function breeze($el) {
  if (!shouldAnimate()) {
    return { breeze: [] };
  }

  const breeze = [
    ...$el.querySelectorAll(":scope [x-breeze-from], :scope [x-breeze-to]"),
  ].map((element) => parseElementAndScheduleEntrance(element));

  return { breeze };
}
