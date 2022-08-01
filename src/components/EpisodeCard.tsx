import Episode from "../types/Episode";

interface Prop {
  episode: Episode;
}

function EpisodeCard({ episode }: Prop): JSX.Element {
  return <p key={episode.id}>{JSON.stringify(episode)}</p>;
}

export default EpisodeCard;
