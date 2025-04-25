const nowUsOrMs: () => number = (typeof process === 'object')
  ? () => Number(process.hrtime.bigint() / 1000n) // node
  : () => performance.now() * 1000 // browser
;

export const timeIt = {
  sync: <T>(func: () => T, logTime: (microseconds: number) => void) => {
    const start = nowUsOrMs();
    const r = func();
    logTime(nowUsOrMs() - start);
    return r;
  },
  async: async <T>(func: () => T, logTime: (microseconds: number) => void) => {
    const start = nowUsOrMs();
    const r = await func();
    logTime(nowUsOrMs() - start);
    return r; // microseconds, divide by 1e6 to get seconds.
  }
};
