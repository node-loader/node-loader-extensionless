import assert from "assert";

describe("basic usage", () => {
  it("Adds .js to extensionless imports", async () => {
    const foo = await import("./fixtures/foo");
    assert.equal(foo.default, "the default exported value");
  });

  it(`Doesn't add .js to bare specifiers / node_modules`, async () => {
    // No .js should be added to this import specifier
    await import("left-pad");
  });

  it(`Doesn't add .js to scoped npm packages`, async () => {
    // No .js should be added to this import specifier
    await import("@baseplate-sdk/utils");
  });

  it(`Adds extensions to ../ imports`, async () => {
    // Parent has a ../ import in it
    const parent = await import("./fixtures/parent/parent.js");
    assert.equal(parent.default, "parent");
    assert.equal(parent.val1, "val1");
  });
});
