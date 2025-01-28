import { obtenerDatosPromise } from "../index.js";
import { describe, it, beforeEach, afterEach } from "node:test";
import { equal, ifError } from "node:assert/strict";
import { unlinkSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs";

describe("2. obtenerDatosPromise", () => {
  it("2.1. obtener datosPromise", async () => {
    const { data } = await obtenerDatosPromise({ time: 1 });
    equal(data, "datos importantes");
  });
});
