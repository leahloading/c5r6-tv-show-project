import { useState } from "react";
import Episode from "../types/Episode";
import Show from "../types/Show";

interface EpisodeSelectorProps {
  itemType: string;
  itemDisplay: number[];
  setItemDisplay: (ids: number[]) => void;
  itemList: (Episode | Show)[];
  dropdownItemName: (el: Episode | Show) => string;
  itemSearchFunction: (
    searchTerm: string,
    itemList: (Episode | Show)[]
  ) => number[];
  selectedItem: number | null;
  setSelectedItem: (id: number | null) => void;
}

const FilterBar = ({
  itemType,
  itemDisplay,
  setItemDisplay,
  itemList,
  dropdownItemName,
  itemSearchFunction,
  selectedItem,
  setSelectedItem,
}: EpisodeSelectorProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemDisplay(itemSearchFunction(e.target.value, itemList));
    setSearchTerm(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`${e.target.value} << DropDown Menu Selected`);
    if (e.target.value === "") {
      setItemDisplay(itemList.map((item) => item.id));
      setSelectedItem(null);
    } else {
      const id = parseInt(e.target.value);
      setItemDisplay([id]);
      setSelectedItem(id);
    }
  };

  const handleReset = () => {
    setItemDisplay(itemList.map((item) => item.id));
    setSelectedItem(null);
    setSearchTerm("");
  };

  return (
    <section className={`${itemType.toLowerCase()} filter-bar`}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <select
        name="episode"
        id="episode-select"
        onChange={handleSelect}
        value={selectedItem ? selectedItem : undefined}
      >
        <option value="">Select All</option>
        {itemList.map((el) => (
          <option key={el.id} value={el.id}>
            {dropdownItemName(el)}
          </option>
        ))}
      </select>

      <button onClick={handleReset}>reset search</button>
    </section>
  );
};

export default FilterBar;
