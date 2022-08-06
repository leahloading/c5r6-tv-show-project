import fetchStaticShows from "./fetchStaticShows";
import getShows from "./getShows";

test("getShows returns the expected length", () => {
  return getShows(fetchStaticShows).then((shows) => {
    expect(shows.length).toBe(245);
  });
});
