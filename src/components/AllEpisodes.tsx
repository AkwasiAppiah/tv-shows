import SingleEpisode from "./SingleEpisode";
import { useEffect } from "react";
import { IEpisode } from "../utils/Interfaces";
import episodes from "./episodes.json";
import { useState } from "react";
import { SearchBar } from "./Searchbar";
import { searchFunction } from "../utils/searchfunction";
import { DropdownBox } from "./DropdownBox";
import { NumofEpisodes } from "./NumofEpisodes";
import { dropdownfunction } from "../utils/dropdownfunction";

const AllEpisodes = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [dropDownState, setdropDownState] = useState("");
  const [getEpisodes, setgetEpisodes] = useState <IEpisode []> ([])

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch(
        "https://api.tvmaze.com/shows/82/episodes"
      );
      const jsonBody: IEpisode [] = await response.json();
      setgetEpisodes(jsonBody)
      console.log({jsonBody})
    }
    fetchEpisodes();
  }, [])

console.log(getEpisodes)

  // https://api.tvmaze.com/shows/82/episodes

const handleResetbutton = () => setdropDownState("");

let filteredEpisodes = [];

dropDownState !== "" ? filteredEpisodes = dropdownfunction({dropDownState, episodes: getEpisodes}) : filteredEpisodes = searchFunction({search, episodes: getEpisodes});

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <p>
        <DropdownBox
          eds={filteredEpisodes}
          dropDownState={dropDownState}
          setdropDownState={setdropDownState}
        />
        <button onClick={handleResetbutton}> RESET</button>
      </p>
      <p>
        <NumofEpisodes eds={filteredEpisodes} episodes={episodes} />
      </p>
      <hr></hr>
      <div className="episodes">
        {filteredEpisodes.map((ep) => (
          <div className="singleEpisode">
            <SingleEpisode ep={ep} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllEpisodes;
