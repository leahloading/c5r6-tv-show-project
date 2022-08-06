import Episode from "../../types/Episode";
import nameEpisodeCard from "../../utils/episodes/nameEpisodeCard";
import stripHtmlTags from "../../utils/stripHtmlTags";

interface EpisodeCardProp {
  episode: Episode;
  onClick: (id: number) => void;
}

function EpisodeCard({ episode, onClick }: EpisodeCardProp): JSX.Element {
  return (
    <article id={episode.id.toString()}>
      <h3 className="card-header">{nameEpisodeCard(episode)}</h3>
      <div className="card-main">
        <div className="image-container">
          <img src={episode.image.medium} alt={`${episode.name}`} />
        </div>
        <div className="summary-pick">
          <button onClick={() => onClick(episode.id)}>Pick</button>
          <p>{stripHtmlTags(episode.summary)}</p>
        </div>
      </div>
    </article>
  );
}

export default EpisodeCard;
