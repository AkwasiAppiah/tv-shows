import { dropdownProps } from "../utils/Interfaces";

export const DropdownBox = ({
  eds,
  dropDownState,
  setdropDownState,
}: dropdownProps): JSX.Element => {
  console.log({ dropDownState });
  return (
    <>
      <select
        id=""
        value={dropDownState}
        onChange={(e) => {
          setdropDownState(e.target.value);
        }}
      >
        {eds.map((episode) => (
          <option value={episode.id}>
            {episode.name},
            {episode.season < 10 ? `S0${episode.season}` : `S${episode.season}`}
            {episode.number < 10 ? `E0${episode.number}` : `E${episode.number}`}
          </option>
        ))}
      </select>
    </>
  );
};
