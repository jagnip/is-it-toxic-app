import { PLANTS } from "../_data/PLANTS";

export default function Search() {
  return (
    <div>
      <input className="m-10" type="text" placeholder="Type to search" />
      <div className="h-[50vh]">
        <ul>
          {Object.keys(PLANTS).map((key) => {
            const plant = PLANTS[key];
            return <li key={key}>{plant.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
