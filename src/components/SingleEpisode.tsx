// import { Url } from 'url';

interface singleEpisodeProp {
  // id: number;
  // url: string;
    name: string;
    season: number;
    number: number;
  //   type: string;
  //   airdate: string;
  //   airtime: string;
  //   airstamp: string;
    runtime: number;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
  //   links: {
  //     self: {
  //       href: string;
  //     };
  // };
}

const SingleEpisode = ({ name,season,number,image,summary,runtime }: singleEpisodeProp): JSX.Element => {
  return (
    <section>
      <h1>{name}</h1>
      <p>
        {season < 10 ? `S0${season}` : `S${season}`}
        {number < 10 ? `E0${number}` : `E${number}`}
      </p>
      <img src={image.medium} alt={name} />
      <p>{summary.replace(/<p>|<\/p>/g, "")}</p>
      <p>{runtime} minutes</p>
    </section>
  );
};

export default SingleEpisode;
