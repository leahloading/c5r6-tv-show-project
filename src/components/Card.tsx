import Episode from "../types/Episode";
import Show from "../types/Show";
import removePTags from "../utils/removePTags";

interface Prop {
  item: Episode | Show;
  id: number;
  name: string;
  summary: string;
  onClick: (id: number | null) => void;
}

function Card({ item, id, name, summary, onClick }: Prop): JSX.Element {
  return (
    <article id={id.toString()}>
      <h3>{name}</h3>
      <button onClick={() => onClick(id)}>Pick</button>
      <p>{removePTags(summary)}</p>
      <img src={item.image.medium} alt={`${item.name}`} />
    </article>
  );
}

export default Card;
