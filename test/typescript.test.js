import assert from "assert";

describe("typescript usage", () => {
  it("Adds .ts to extensionless imports with .ts parentURL", async () => {
    const parentModule = await import("./fixtures/typescript/parent.ts");
    assert.equal(parentModule.default, "parent module");
    assert.equal(parentModule.val1, "val1");
  });

  it("Adds .tsx to extensionless imports with .ts parentURL", async () => {
    const parentModule = await import("./fixtures/typescript/parent2.ts");
    assert.equal(parentModule.default, "parent module");
    assert.equal(parentModule.val2, "val2");
  });
});
