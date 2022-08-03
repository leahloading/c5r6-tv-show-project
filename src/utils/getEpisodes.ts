import nullEpisode from "../data/nullEpisode.json";
import Episode from "../types/Episode";
import WideEpisode from "../types/WideEpisode";

const getData = async (fetchEpisodes: () => Promise<WideEpisode[]>): Promise<Episode[]> => {
  const widelyTypedEpisodes: WideEpisode[] = await fetchEpisodes()
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
  image: episode.image || nullEpisode.image,
  summary: episode.summary || nullEpisode.summary,
  _links: {
    self: {
      href: episode._links.self.href,
    },
  },
});

export default getData;
