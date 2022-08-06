import { useState } from "react";
import Show from "../../types/Show";
import searchShow from "../../utils/shows/searchShows";

interface ShowFilterBarProps {
  itemType: string;
  itemDisplay: number[];
  setItemDisplay: (ids: number[]) => void;
  itemList: Show[];
  selectedItem: number | null;
  setSelectedItem: (id: number | null) => void;
}

const ShowFilterBar = ({
  itemType,
  itemDisplay,
  setItemDisplay,
  itemList,
  selectedItem,
  setSelectedItem,
}: ShowFilterBarProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemDisplay(searchShow(e.target.value, itemList));
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
      <button onClick={handleReset}>reset search</button>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={`search ${itemType.toLowerCase()}s...`}
      />
      <select
        name="show"
        id="show-select"
        onChange={handleSelect}
        value={selectedItem ? selectedItem : undefined}
      >
        <option value="">Select All</option>
        {itemList.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ShowFilterBar;
