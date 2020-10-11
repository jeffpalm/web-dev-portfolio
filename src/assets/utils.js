/**
 * Returns a Promise that will fire cb function and resolve in to ms.
 * @param cb Callback to fire within Timeout
 * @param to Timeout length in ms.
 * @returns {Promise<unknown>}
 */
export const tOP = (cb, to) =>
  new Promise((resolve) => {
    const timeout = setTimeout(() => {
      cb();
      resolve(timeout);
    }, to);
  });
