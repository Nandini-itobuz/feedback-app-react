import Cards from "./Shared/Cards";
import { FaTimes } from "react-icons/fa";

function FeedbackItems({ item }) {
 
  const handleClick = (id) =>{
    console.log(id);
  }

  return (
    <Cards>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleClick(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Cards>
  );
}

export default FeedbackItems;
