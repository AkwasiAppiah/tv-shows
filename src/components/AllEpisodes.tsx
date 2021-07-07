import SingleEpisode from "./SingleEpisode";
import episodes from "./episodes.json";

const AllEpisodes = (): JSX.Element => {
  return (
    <>
      {episodes.map((ep, key) => (
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
