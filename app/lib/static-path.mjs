import path from "node:path";

/**
 * Resolve a URL pathname beneath a static-file root.
 * Returns null for malformed encodings or paths that escape the root.
 */
export function resolveStaticPath(root, requestPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(String(requestPath || "/"));
  } catch {
    return null;
  }

  if (!decoded.startsWith("/") || decoded.includes("\\") || decoded.includes("\0")) {
    return null;
  }

  const rootPath = path.resolve(root);
  const relative = decoded === "/" ? "index.html" : decoded.slice(1);
  const candidate = path.resolve(rootPath, relative);

  if (candidate !== rootPath && !candidate.startsWith(rootPath + path.sep)) {
    return null;
  }

  return candidate;
}
