import getData from "./getData";

test("getData returns the expected length", () => {
  return getData().then((data) => {
    expect(data.length).toBe(73);
  });
});
