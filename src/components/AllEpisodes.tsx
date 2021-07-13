import SingleEpisode from "./SingleEpisode";
import episodes from "./episodes.json";
import { useState } from "react";
import { SearchBar } from "./Searchbar";
import { searchFunction } from "../utils/searchfunction";
import { DropdownBox } from "./DropdownBox"; 
import { NumofEpisodes } from "./NumofEpisodes";
import { dropdownfunction } from "../utils/dropdownfunction";

const AllEpisodes = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [dropDownState , setdropDownState] = useState ("");

  const handleResetbutton = () => setdropDownState('')

  let filteredEpisodes;
  
  if(dropDownState !== ""){
     filteredEpisodes = dropdownfunction({dropDownState, episodes})

  }
  else{
  filteredEpisodes = searchFunction({ search, episodes })}

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <p>
        <DropdownBox eds={filteredEpisodes} dropDownState = {dropDownState} setdropDownState = {setdropDownState} />
        <button onClick = {handleResetbutton}> RESET</button>
      </p>
      <p>
        <NumofEpisodes eds={filteredEpisodes} episodes={episodes} />
      </p>
      <hr></hr>
      <div className="episodes">
        {filteredEpisodes.map((ep) => (
          <div className = "singleEpisode">
            <SingleEpisode ep={ep} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllEpisodes;
