import Show from "../../types/Show";
import presentInIdList from "../../utils/presentInIdList";
import ShowCard from "./ShowCard";

interface ShowDisplayListProps {
  ids: number[];
  itemList: Show[];
  itemType: string;
  onCardClick: (id: number) => void;
}

const ShowDisplayList = ({
  ids,
  itemList,
  itemType,
  onCardClick,
}: ShowDisplayListProps): JSX.Element => {
  const filteredItems = itemList.filter((item: Show) =>
    presentInIdList(item.id, ids)
  );

  return (
    <section className={`${itemType.toLowerCase()} display`}>
      <p className="found">
        {itemType} found: {filteredItems.length}
      </p>
      <div className="results">
        {filteredItems.map((el: Show) => (
          <ShowCard key={el.id} show={el} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
};

export default ShowDisplayList;
