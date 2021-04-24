import { parseElementAndScheduleEntrance } from "../utils.js";

export const versions = {
  2: {
    bind: ($el) => parseElementAndScheduleEntrance($el),
  },
  3: {
    beforeMount: ($el) => parseElementAndScheduleEntrance($el),
  },
};

export const breeze = (version = 3) => {
  if (versions[version]) {
    return versions[version];
  }

  throw new Error(
    `Unsupported Vue version passed to breeze: version ${version}`
  );
};
