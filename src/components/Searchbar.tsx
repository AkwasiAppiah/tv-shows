import { searchProps } from "../utils/Interfaces";

export const SearchBar = ({ search, setSearch }: searchProps): JSX.Element => {
  return (
    <div className="searchcontainer">
      <input
        placeholder="Search..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};

// function greet() {}
// export greet;
