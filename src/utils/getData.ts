import episodes from "../data/episodes.json";
import Episode from "../types/Episode";

const getData = (): Episode[] => {
  return episodes;
};

export default getData;
