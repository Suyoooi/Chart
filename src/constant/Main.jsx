import D3ChartMulti from "./D3Chart/D3ChartMulti";
import { data } from "./D3Chart/data";

const Main = () => {
  return (
    <div>
      <D3ChartMulti data={data} />
    </div>
  );
};

export default Main;
