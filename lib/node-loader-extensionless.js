export async function resolve(specifier, context, nextResolve) {
  const pathParts = specifier.split("/");
  const fileName = pathParts[pathParts.length - 1];
  const isRelativePath =
    specifier.startsWith("./") ?? specifier.startsWith("../");

  // Only add .ts extension to path-like specifiers, not bare specifiers
  if (isRelativePath && !fileName.includes(".")) {
    return nextResolve(specifier + ".js", context);
  }

  return nextResolve(specifier, context);
}
