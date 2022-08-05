import Episode from "../types/Episode";
import Show from "../types/Show";
import generateEpisodeCode from "../utils/generateEpisodeCode";
import removeEpNameSpace from "../utils/removeEpNameSpace";
import removePTags from "../utils/removePTags";

interface Prop {
  item: Episode | Show;
  id: string;
  name: string;
  paragraph: string;
}

function Card({ item, id, name, paragraph }: Prop): JSX.Element {
  return (
    <article
      // id = id
      id={id}
    >
      <h3>
        {item.name} <span>{name}</span>
      </h3>
      <p>{paragraph}</p>
      <img src={item.image.medium} alt={`${item.name}`} />
    </article>
  );
}

export default Card;
