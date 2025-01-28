import { ping } from "../index.js";
import { describe, it, beforeEach, afterEach } from "node:test";
import { equal, ifError } from "node:assert/strict";
import { unlinkSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs";

describe("1. ping", () => {
  it("1.1. ping miguel.dev", (_, done) => {
    ping("miguel.dev", (err, info) => {
      ifError(err);
      equal(info.ip, "miguel.dev");
      done();
    });
  });
});
