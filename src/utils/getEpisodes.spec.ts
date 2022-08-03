import fetchStaticEpisodes from "./fetchStaticEpisodes";
import getData from "./getEpisodes";

test("getData returns the expected length", () => {
  return getData(fetchStaticEpisodes).then((data) => {
    expect(data.length).toBe(73);
  });
});
