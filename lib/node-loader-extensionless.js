export async function resolve(specifier, context, nextResolve) {
  const pathParts = specifier.split("/");
  const fileName = pathParts[pathParts.length - 1];

  // Only add .ts extension to path-like specifiers, not bare specifiers
  if (pathParts.length > 1 && !fileName.includes(".")) {
    return nextResolve(specifier + ".js", context);
  }

  return nextResolve(specifier, context);
}
