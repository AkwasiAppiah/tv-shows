import { dropdownProps } from "../utils/Interfaces";

export const DropdownBox = ({ eds }: dropdownProps): JSX.Element => {
  return (
    <>
      <select id="episodes">
        {eds.map((episode) => (
          <option>
            {episode.name}, {episode.season < 10 ? `S0${episode.season}` : `S${episode.season}`}
              {episode.number < 10 ? `E0${episode.number}` : `E${episode.number}`}
          </option>
        ))}
      </select>
    </>
  );
};
