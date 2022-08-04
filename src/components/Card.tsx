import Episode from "../types/Episode";
import Show from "../types/Show";
import generateEpisodeCode from "../utils/generateEpisodeCode";
import removeEpNameSpace from "../utils/removeEpNameSpace";
import removePTags from "../utils/removePTags";

interface Prop {
  item: Episode | Show;
  id: string;
  provideID: (el: Episode) => string | ((el: Show) => string);
}

function Card({ item, id }: Prop): JSX.Element {
  return (
    <article
      // id = id
      id={`${removeEpNameSpace(item)}-${generateEpisodeCode(
        item
      )}`.toLowerCase()}
    >
      <h3>
        {item.name} <span>{generateEpisodeCode(item)}</span>
      </h3>
      <p>{removePTags(item)}</p>
      <img src={item.image.medium} alt={`${item.name}`} />
    </article>
  );
}

export default Card;
