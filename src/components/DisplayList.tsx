import Episode from "../types/Episode";
import Show from "../types/Show";
import filterEpisodes from "../utils/filterEpisodes";
import Card from "./Card";

interface DisplayListProps {
  searchTerm: string;
  itemList: Episode[] | Show[];
}

const DisplayList = ({ searchTerm, itemList }: DisplayListProps) => {
  const filteredEpisodes: Episode[] | Show[] = itemList.filter(
    (ep: Episode | Show) => filterEpisodes(ep, searchTerm)
  );

  return (
    <section className="episode selector">
      <section className="displayList">
        <p>Episodes found: {filteredEpisodes.length}</p>
        {filteredEpisodes.map((el: Episode | Show) => (
          <Card key={el.id} episode={el} />
        ))}
      </section>
    </section>
  );
};

export default DisplayList;
