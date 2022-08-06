import Show from "../../types/Show";
import mockShows from "../../data/mockShows.json";

async function fetchStaticShows(): Promise<Show[]> {
  return await mockShows;
}

export default fetchStaticShows;
