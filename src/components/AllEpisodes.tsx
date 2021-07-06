import SingleEpisode from "./SingleEpisode";
import episodes from "./episodes.json";

const AllEpisodes = (): JSX.Element => {
  return (
    <>
      {episodes.map((ep, key) => (
        <div key={key}>
          <SingleEpisode
            id={ep.id}
            url={ep.url}
            name={ep.name}
            season={ep.season}
            type={ep.type}
            airdate={ep.airdate}
            airstamp={ep.airstamp}
            links={ep._links}
            number={ep.number}
            airtime={ep.airtime}
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
