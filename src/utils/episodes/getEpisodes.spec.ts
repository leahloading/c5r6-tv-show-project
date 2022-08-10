import fetchStaticEpisodes from "./fetchStaticEpisodes";
import getEpisodes from "./getEpisodes";

test("getData returns the expected length", () => {
  return getEpisodes(fetchStaticEpisodes).then((episodes) => {
    expect(episodes.length).toBe(73);
  });
});
