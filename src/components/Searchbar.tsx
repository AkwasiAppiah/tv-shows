import { searchProps } from "../utils/Interfaces";

export const SearchBar = ({ search, setSearch }: searchProps): JSX.Element => {
  console.log(search);
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
