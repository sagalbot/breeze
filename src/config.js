/**
 * The default configuration used by Breeze.
 */
export const defaultConfig = {
  directive: "x-breeze",
};

/**
 * Merge a config object with the defaults.
 * @param {Object} config
 */
export const merge = (config = {}) => Object.assign(defaultConfig, config);
