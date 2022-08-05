import Episode from "../types/Episode";
import Show from "../types/Show";
import removePTags from "../utils/removePTags";

interface Prop {
  item: Episode | Show;
  id: string;
  name: string;
  summary: string;
}

function Card({ item, id, name, summary }: Prop): JSX.Element {
  return (
    <article id={id}>
      <h3>{name}</h3>
      <p>{removePTags(summary)}</p>
      <img src={item.image.medium} alt={`${item.name}`} />
    </article>
  );
}

export default Card;
