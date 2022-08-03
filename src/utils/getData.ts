import Episode from "../types/Episode";
import WideEpisode from "../types/WideEpisode";

const getData = async (): Promise<Episode[]> => {
  const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
  const widelyTypedEpisodes: WideEpisode[] = await response.json();
  const narrowlyTypedEpisodes = widelyTypedEpisodes.map((ep: WideEpisode) =>
    narrowEpisodeType(ep)
  );

  return narrowlyTypedEpisodes;
};

const narrowEpisodeType = (episode: WideEpisode): Episode => ({
  id: episode.id,
  url: episode.url,
  name: episode.name,
  season: episode.season,
  number: episode.number,
  type: episode.type,
  airdate: episode.airdate,
  airtime: episode.airtime,
  airstamp: episode.airstamp,
  runtime: episode.runtime,
  rating: {
    average: episode.rating.average || null,
  },
  image: episode.image || null,
  summary: episode.summary || null,
  _links: {
    self: {
      href: episode._links.self.href,
    },
  },
});

export default getData;
