import Episode from "../types/Episode";
import Show from "../types/Show";
import filterItem from "../utils/filterItem";
import Card from "./Card";

interface DisplayListProps {
  ids: number[];
  itemList: (Episode | Show)[];
  itemType: string;
  nameCard: (item: Episode | Show) => string;
  onCardClick: (id: number | null) => void;
}

const DisplayList = ({
  ids,
  itemList,
  itemType,
  nameCard,
  onCardClick,
}: DisplayListProps): JSX.Element => {
  const filteredItems = itemList.filter((item: Episode | Show) =>
    filterItem(item, ids)
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
        {filteredItems.map((el: Episode | Show) => (
          <Card
            key={el.id}
            item={el}
            name={nameCard(el)}
            id={el.id}
            summary={el.summary}
            onClick={onCardClick}
          />
        ))}
      </div>
    </section>
  );
};

export default DisplayList;
