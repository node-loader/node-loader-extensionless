import { extname, basename } from "node:path";

const typescriptFileExts = [".ts", ".tsx", ".mts", ".cts"];

export async function resolve(specifier, context, nextResolve) {
  const fileName = basename(specifier);
  const isRelativePath =
    specifier.startsWith("./") ?? specifier.startsWith("../");

  let result;

  // Only add extensions to path-like specifiers, not bare specifiers
  if (isRelativePath && !fileName.includes(".")) {
    const parentFileExt = context.parentURL
      ? extname(context.parentURL) || ".js"
      : ".js";

    const isTypescript = typescriptFileExts.includes(parentFileExt);
    // Mimic the typescript file extension substitution algorithm
    // Ideally we'd take into account the moduleResolution option, but for now we skip that
    // https://www.typescriptlang.org/docs/handbook/modules/reference.html#file-extension-substitution
    const fileExtensionsToTry = isTypescript
      ? [".ts", ".tsx", ".mts", ".cts", ".d.ts", ".d.mts", ".d.cts", ".js"]
      : [".js"];

    for (const ext of fileExtensionsToTry) {
      try {
        result = await nextResolve(specifier + ext, context);
        break;
      } catch {}
    }
  } else {
    result = nextResolve(specifier, context);
  }

  if (!result) {
    throw Error(
      `Could not resolve specifier '${specifier}' from parent URL ${context.parentURL}`,
    );
  }

  return result;
}
