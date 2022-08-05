import Episode from "../types/Episode";
import Show from "../types/Show";

interface ItemSelectorProps<ItemType> {
  searchTerm: string;
  setSearchTerm: (str: string) => void;
  itemList: ItemType[];
  dropdownItemName: (el: ItemType) => string;
}

const FilterBar = ({
  searchTerm,
  setSearchTerm,
  itemList,
  dropdownItemName,
}: ItemSelectorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSearchTerm(e.target.value);

  const handleReset = () => setSearchTerm("");

  return (
    <section className="filterBar">
      <input type="text" value={searchTerm} onChange={handleChange} />
      <select
        name="episode"
        id="episode-select"
        onChange={handleSelect}
        value={searchTerm}
      >
        <option value="">Select All</option>
        {itemList.map((el) => (
          <option key={el.id} value={el.name}>
            {dropdownItemName(el)}
          </option>
        ))}
      </select>

      <button onClick={handleReset}>reset search</button>
    </section>
  );
};

export default FilterBar;
