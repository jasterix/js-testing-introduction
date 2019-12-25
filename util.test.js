const { generateText } = require("./util");

// have a double check
test("should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
  const text2 = generateText("Anna", 28);
  expect(text2).toBe("Anna (28 years old)");
});

// test the opposite or false positives
test("should output data-less test", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
