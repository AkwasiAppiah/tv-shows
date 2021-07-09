import SingleEpisode from "./SingleEpisode";
import episodes from "./episodes.json";
import { useState } from "react";
import { SearchBar } from "./Searchbar";
import { searchFunction } from "../utils/searchfunction";
import { DropdownBox } from "./DropdownBox";

const AllEpisodes = (): JSX.Element => {
  const [search, setSearch] = useState("");

  const filteredEpisodes = searchFunction({ search, episodes });
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <p><DropdownBox eds = {episodes}/></p>
      <hr></hr>
      <div className="episodes">
        {filteredEpisodes.map((ep) => (
          <div>
            <SingleEpisode ep={ep} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllEpisodes;
