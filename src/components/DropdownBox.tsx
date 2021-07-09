import { dropdownProps } from "../utils/Interfaces";

export const DropdownBox = ({ eds }: dropdownProps): JSX.Element => {
  return (
    <>
      <select id="episodes">
        {eds.map((episode) => (
          <option>{episode.name}</option>
        ))}
      </select>
    </>
  );
};
