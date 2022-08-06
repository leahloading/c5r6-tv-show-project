import Episode from "../../types/Episode";
import presentInIdList from "../../utils/presentInIdList";
import Card from "./EpisodeCard";

interface EpisodeDisplayListProps {
  ids: number[];
  itemList: Episode[];
  itemType: string;
  onCardClick: (id: number) => void;
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
          <Card key={el.id} episode={el} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
};

export default EpisodeDisplayList;
