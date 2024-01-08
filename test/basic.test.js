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
});
