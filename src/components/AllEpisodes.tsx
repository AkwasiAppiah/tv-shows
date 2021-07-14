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
import { SelectShow } from "./SelectShow";
import SingleShow from "./SingleShow";
import shows from "./shows.json";

const AllEpisodes = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [dropDownState, setdropDownState] = useState("");
  const [getEpisodes, setgetEpisodes] = useState<IEpisode[]>([]);
  const [showState, setShowState] = useState("82");

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${showState}/episodes`
      );
      const jsonBody: IEpisode[] = await response.json();
      setgetEpisodes(jsonBody);
      console.log({ jsonBody });
    };
    fetchEpisodes();
  }, [showState]);

  console.log(showState);

  const handleResetbutton = () => setdropDownState("");

  let filteredEpisodes = [];

  dropDownState !== ""
    ? (filteredEpisodes = dropdownfunction({
        dropDownState,
        episodes: getEpisodes,
      }))
    : (filteredEpisodes = searchFunction({ search, episodes: getEpisodes }));

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
        <SelectShow
          showState={showState}
          setShowState={setShowState}
          shows={shows}
        />
      </p>
      <p>
        <NumofEpisodes eds={filteredEpisodes} episodes={episodes} />
      </p>
      <hr></hr>
      <div className="episodes">
        {shows.map((show) => <SingleShow shows = {show}/>)}
      </div>
    </>
  );
};

export default AllEpisodes;
