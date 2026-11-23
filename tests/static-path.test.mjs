import test from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { resolveStaticPath } from "../app/lib/static-path.mjs";

const root = path.resolve("test-fixtures", "public");

test("maps the site root to index.html", () => {
  assert.equal(resolveStaticPath(root, "/"), path.join(root, "index.html"));
});

test("resolves nested and URL-encoded static paths", () => {
  assert.equal(
    resolveStaticPath(root, "/portraits/charlie%20marks.webp"),
    path.join(root, "portraits", "charlie marks.webp"),
  );
});

test("rejects literal and URL-encoded directory traversal", () => {
  assert.equal(resolveStaticPath(root, "/../../.env"), null);
  assert.equal(resolveStaticPath(root, "/%2e%2e/%2e%2e/.env"), null);
  assert.equal(resolveStaticPath(root, "/..%2f..%2f.env"), null);
});

test("rejects malformed encodings and backslash paths", () => {
  assert.equal(resolveStaticPath(root, "/bad%ZZname"), null);
  assert.equal(resolveStaticPath(root, "/..%5c..%5c.env"), null);
});

test("normalisation cannot escape through an embedded parent segment", () => {
  assert.equal(resolveStaticPath(root, "/portraits/../../.env"), null);
});
