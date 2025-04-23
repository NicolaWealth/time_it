const nowUs: () => number = (typeof process === 'object')
  ? () => Number(process.hrtime.bigint() / 1000n) // node
  : performance.now // browser
;

export const timeIt = <T>(func: () => T, logTime: (microseconds: number) => void) => {
  const start = nowUs();
  const r = func();
  logTime(nowUs() - start);
  return r;
};

export const timeItAsync = async <T>(func: () => Promise<T>, logTime: (microseconds: number) => void) => {
  const start = nowUs();
  const r = await func();
  logTime(nowUs() - start);
  return r; // microseconds, divide by 1e6 to get seconds.
};
