import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {

    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((sum, current) => {
        return sum = sum+current.rating;
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/,'')


  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
    <h4>Aveage Rating: {isNaN(average) ? 0: average}</h4>
    </div>
  );
}

export default FeedbackStats;
