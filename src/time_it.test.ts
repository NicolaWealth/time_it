import assert = require("node:assert");
import {timeIt, timeItAsync} from "./time_it";

describe("timeIt", () => {
  it("basics", async () => {
    let ms = 0;

    let r = timeIt(
      () => 1,
      logTime => ms = logTime,
    );
    assert.strictEqual(1, r);
    assert.ok(ms > 0);

    r = await timeItAsync(
      async () => 2,
      logTime => ms = logTime,
    );
    assert.strictEqual(2, r);
    assert.ok(ms > 2);
  });
});
