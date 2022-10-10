import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return (
    <div className="stacked">
      <div id="top">
        <div className="stacked left">
          <Bedroom bedNum={'1'} id="bed1"/>
          <Bath size={'Full'} Bath />
        </div>
        <LivingRoom />
        <Kitchen />
      </div>
      <div id="bottom">
        <Bedroom bedNum={'2'}/>
        <Bath size={'Half'} Bath/>
        <Bedroom bedNum={'3'} />
      </div>
    </div>
  )
}

export default FloorPlan;
