import Show from "../../types/Show";
import presentInIdList from "../../utils/presentInIdList";
import nameShowCard from "../../utils/shows/nameShowCard";
import ShowCard from "./ShowCard";

interface ShowDisplayListProps {
  ids: number[];
  itemList: Show[];
  itemType: string;
  onCardClick: (id: number | null) => void;
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
          <ShowCard
            key={el.id}
            item={el}
            name={nameShowCard(el)}
            id={el.id}
            summary={el.summary}
            onClick={onCardClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ShowDisplayList;
