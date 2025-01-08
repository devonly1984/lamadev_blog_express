import { useSearchParams } from "react-router-dom";
import { filters } from "../../constants/constants";

const Filters = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const handleFilterChange = e=>{
    if (searchParams.get("sort") !== e.traget.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  }
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
            onChange={handleFilterChange}
          />
          {filter.title}
        </label>
      ))}
    </div>
  );
}
export default Filters