import { leerArchivos } from "../index.js";
import { describe, it, beforeEach, afterEach } from "node:test";
import { equal, ifError } from "node:assert/strict";
import { unlinkSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs";

describe("4. leerArchivos", () => {
  it("4.1. leerArchivos", async () => {
    const message = await leerArchivos();
    equal(message, "hola, ¿como estas?");
  });
});
