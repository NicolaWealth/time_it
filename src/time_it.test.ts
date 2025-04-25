import assert = require("node:assert");
import {timeIt} from "./time_it";

describe("timeIt", () => {
  let ms = 0;

  it("basic sync", async () => {
    let r = timeIt.sync(
      () => 1,
      logTime => ms = logTime,
    );
    assert.strictEqual(1, r);
    assert.ok(ms > 0);
  });

  it("basic async", async () => {
    let r = await timeIt.async(
      async () => 2,
      logTime => ms = logTime,
    );
    assert.strictEqual(2, r);
    assert.ok(ms > 2);
  });
});
