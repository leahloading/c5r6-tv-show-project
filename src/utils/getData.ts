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

  const wideEpisodes: WideEpisode[] = episodes

  const cleanedEpisodes: Episode[] = wideEpisodes.map((ep) => ({
    id: ep.id,
    url: ep.url,
    name: ep.name,
    season: ep.season,
    number: ep.number,
    type: ep.type,
    airdate: ep.airdate,
    airtime: ep.airtime,
    airstamp: ep.airstamp,
    runtime: ep.runtime,
    rating: {
      average: ep.rating.average || null
    },
    image: ep.image || null,
    summary: ep.summary || null,
    _links: {
      self: {
        href: ep._links.self.href,
      },
    },
  }))

  return cleanedEpisodes

  return episodes;
};

export default getData;
