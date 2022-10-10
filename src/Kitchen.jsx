import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = (props) => {
  return (
    <div className="stacked" id="kitchen">
      <div>
        <div id="oven">Oven</div>
        <div id="sink">Sink</div>
      </div>
      <h1>Kitchen</h1>
    </div>
  )
}

export default Kitchen
