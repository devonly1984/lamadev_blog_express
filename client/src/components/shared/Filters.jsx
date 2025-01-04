import { filters } from "../../constants/constants";

const Filters = () => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      {filters.map((filter) => (
        <label
          htmlFor=""
          className="flex items-center gap-2 cursor-pointer"
          key={filter.title}
        >
          <input
            type="radio"
            name="sort"
            value={filter.value}
            className="appearance-none size-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800 bg-white"
          />
          {filter.title}
        </label>
      ))}
    </div>
  );
}
export default Filters