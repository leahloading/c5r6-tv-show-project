import Episode from "../types/Episode";
import Show from "../types/Show";
import filterEpisodes from "../utils/filterEpisodes";
import filterItem from "../utils/filterItem";
import Card from "./Card";

interface DisplayListProps {
  ids: number[];
  itemList: (Episode | Show)[];
  itemType: string;
}

const DisplayList = ({ ids, itemList, itemType }: DisplayListProps) => {
  const filteredItems = itemList.filter((item: Episode | Show) =>
    filterItem(item, ids)
  );

  return (
    <section className={`${itemType.toLocaleLowerCase} selector`}>
      <section className="displayList">
        <p>
          {itemType} found: {filteredItems.length}
        </p>
        {filteredItems.map((el: Episode | Show) => (
          <Card
            key={el.id}
            item={el}
            name={el.name}
            id={el.id.toString()}
            paragraph={el.summary}
          />
        ))}
      </section>
    </section>
  );
};

export default DisplayList;
