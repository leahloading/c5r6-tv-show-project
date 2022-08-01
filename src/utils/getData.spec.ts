import getData from "./getData";

test("getData returns the expected length", () => {
  expect(getData()).toHaveLength(73);
});
