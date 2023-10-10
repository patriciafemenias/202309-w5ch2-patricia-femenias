import strictEquals from "./strictEquals";

describe("Given a strictEquals function", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const isExpectedEqualValue = true;

      const isEqualValue = strictEquals(valueA, valueB);

      expect(isEqualValue).toBe(isExpectedEqualValue);
    });
  });
});
