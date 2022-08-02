import episodes from "../data/episodes.json";
import Episode from "../types/Episode";

interface WideEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
  _links: {
    self: {
      href: string;
    };
  };
}

const getData = (): Episode[] => {

  const wideEpisode: WideEpisode = episodes as WideEpisode

  if (wideEpisode) {
    const cleanedData = episodes.map((ep) => {
      id: ep.id
      url: ep.url;
      name: ep.name;
      season: ep.season;
      number: ep.number;
      type: ep.type;
      airdate: ep.airdate;
      airtime: ep.airtime;
      airstamp: ep.airstamp;
      runtime: ep.runtime;
      rating: {
        average: ep.rating.average || -1
      };
      image: ep.image || null;
      summary: ep.summary || "summary missing";
      _links: {
        self: {
          href: ep._links.self.href;
        };
      };
    })
  }

  return cleanedData

};

export default getData;
