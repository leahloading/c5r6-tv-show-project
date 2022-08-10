import presentInIdList from "./presentInIdList";

test("presentInIdList returns true when an id is present in list of Ids", () => {
  expect(presentInIdList(12, [10, 11, 12, 14])).toBe(true);
});
