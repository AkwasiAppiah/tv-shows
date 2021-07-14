import { showSelectorProps } from "../utils/Interfaces"

export const SelectShow = ({showState, shows, setShowState}: showSelectorProps) :JSX.Element => {
    console.log({ showState })
return(
    <>
    <select
      id=""
      value={showState}
      onChange={(e) => {
        setShowState(e.target.value);
      }}
    >
      {shows.map((show) => (
        <option value={show.id}>
          {show.name}
        </option>
      ))}
    </select>
  </>
)

}