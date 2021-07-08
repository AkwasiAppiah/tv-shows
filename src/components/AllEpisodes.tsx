import SingleEpisode from "./SingleEpisode";
import episodes from "./episodes.json";
import { useState } from "react";

const AllEpisodes = (): JSX.Element => {
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      {episodes.filter((episode) => {
        if (search === "") {
          return episode;
        } else if (
          episode.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || episode.summary.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return episode;
        }
      }).map((ep, key) => (
        <div key={key}>
          <SingleEpisode
            name={ep.name}
            season={ep.season}
            number={ep.number}
            runtime={ep.runtime}
            image={ep.image}
            summary={ep.summary}
          />
        </div>
      ))}
    </>
  );
};

export default AllEpisodes;
