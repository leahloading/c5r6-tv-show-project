import Episode from "../../types/Episode";
import nameEpisodeCard from "../../utils/episodes/nameEpisodeCard";
import presentInIdList from "../../utils/episodes/presentInIdList";
import Card from "./EpisodeCard";

interface EpisodeDisplayListProps {
  ids: number[];
  itemList: Episode[];
  itemType: string;
  onCardClick: (id: number | null) => void;
}

const EpisodeDisplayList = ({
  ids,
  itemList,
  itemType,
  onCardClick,
}: EpisodeDisplayListProps): JSX.Element => {
  const filteredItems = itemList.filter((item: Episode) =>
    presentInIdList(item.id, ids)
  );
  console.log(
    "filtered item: ",
    filteredItems.map((i) => i.id)
  );

  return (
    <section className={`${itemType.toLowerCase()} display`}>
      <p className="found">
        {itemType} found: {filteredItems.length}
      </p>
      <div className="results">
        {filteredItems.map((el: Episode) => (
          <Card
            key={el.id}
            item={el}
            name={nameEpisodeCard(el)}
            id={el.id}
            summary={el.summary}
            onClick={onCardClick}
          />
        ))}
      </div>
    </section>
  );
};

export default EpisodeDisplayList;
