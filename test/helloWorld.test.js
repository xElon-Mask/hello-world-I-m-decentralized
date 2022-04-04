const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", () => {
  it("doit retourner Bonsoir Elliot", async () => {
    const helloWorld = await HelloWorld.deployed();
    const result = await helloWorld.hi();
    assert(result === "Bonsoir Elliot");
  });
});
