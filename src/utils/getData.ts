// import episodes from "../data/episodes.json";
import Episode from "../types/Episode";

const getData = async (): Promise<Episode[]> => {
  const response = await fetch("https://api.tvmaze.com/shows/527/episodes");
  const episodes: Promise<Episode[]> = await response.json();
  return episodes;
};

export default getData;
