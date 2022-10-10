import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = (props) => {
  return (
    <div className="stacked" id="kitchen">
      <div>
        <Oven />
        <Sink />
      </div>
      <h1>Kitchen</h1>
    </div>
  )
}

export default Kitchen
