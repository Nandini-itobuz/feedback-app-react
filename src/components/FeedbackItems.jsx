import Cards from "./Shared/Cards";
import { FaTimes } from "react-icons/fa";

function FeedbackItems({ item,handleDelete }) {
 
  return (
    <Cards>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Cards>
  );
}

export default FeedbackItems;
