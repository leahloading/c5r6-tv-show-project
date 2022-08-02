import Episode from "../types/Episode";
import generateEpisodeCode from "../utils/generateEpisodeCode";
import removeEpNameSpace from "../utils/removeEpNameSpace";
import removePTags from "../utils/removePTags";

interface Prop {
  episode: Episode;
}

function EpisodeCard({ episode }: Prop): JSX.Element {
  return (
    <article
      id={`${removeEpNameSpace(episode)}-${generateEpisodeCode(
        episode
      )}`.toLowerCase()}
    >
      <h3>
        {episode.name} <span>{generateEpisodeCode(episode)}</span>
      </h3>
      <p>{removePTags(episode)}</p>
      <img src={episode.image!.medium} alt={`${episode.name}`} />
    </article>
  );
}

export default EpisodeCard;
